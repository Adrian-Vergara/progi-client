import { defineComponent } from 'vue'
import type { CalculatedAmount } from '@/shared/interfaces/CalculatedAmount';

export default defineComponent({
    name: 'VehicleTable',
    props: {
        data: { type: Array<CalculatedAmount>, default: () => [] },
    },
    data () {
        return {
            moneyFormatter: new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2, // Ensures at least two decimal places
                maximumFractionDigits: 2  // Limits to only two decimal places
            }),
            columns: [
                {
                    title: 'Vehicle Type',
                    key: 'car_type',
                    customRender: ({ record }) => record?.car_type?.name,
                },
                {
                    title: 'Vehicle Price ($)',
                    dataIndex: 'price',
                    key: 'price',
                    customRender: ({ text }): string => this.moneyFormatter.format(text)
                },
                {
                    title: 'Fees ($)',
                    children: [
                        {
                            title: 'Basic',
                            dataIndex: 'basic_user_fee',
                            key: 'basic_user_fee',
                            customRender: ({ text }): string => this.moneyFormatter.format(text),
                        },
                        {
                            title: 'Special',
                            dataIndex: 'seller_special_fee',
                            key: 'seller_special_fee',
                            customRender: ({ text }): string => this.moneyFormatter.format(text),
                        },
                        {
                            title: 'Association',
                            dataIndex: 'association_fee',
                            key: 'association_fee',
                            customRender: ({ text }): string => this.moneyFormatter.format(text),
                        },
                        {
                            title: 'Storage',
                            dataIndex: 'fixed_storage_fee',
                            key: 'fixed_storage_fee',
                            customRender: ({ text }): string => this.moneyFormatter.format(text),
                        },
                    ]
                },
                {
                    title: 'Total',
                    key: 'total',
                    dataIndex: 'total',
                    customRender: ({ text }): string => this.moneyFormatter.format(text),
                },
            ],
        }
    },
})
