import { defineComponent } from 'vue'
import type { CalculatedAmount } from '@/shared/interfaces/CalculatedAmount';

const moneyFormatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export default defineComponent({
    name: 'VehicleTable',
    props: {
        data: { type: Array<CalculatedAmount>, default: () => [] },
    },
    data () {
        return {
            columns: [
                {
                    title: 'Vehicle Type',
                    key: 'car_type',
                    customRender: ({ record }: { record: CalculatedAmount }): string => record?.car_type?.name
                },
                {
                    title: 'Vehicle Price ($)',
                    dataIndex: 'price',
                    key: 'price',
                    customRender: ({ record }: { record: CalculatedAmount }): string => moneyFormatter.format(record?.price)
                },
                {
                    title: 'Fees ($)',
                    children: [
                        {
                            title: 'Basic',
                            dataIndex: 'basic_user_fee',
                            key: 'basic_user_fee',
                            customRender: ({ record }: { record: CalculatedAmount }): string => moneyFormatter.format(record?.basic_user_fee),
                        },
                        {
                            title: 'Special',
                            dataIndex: 'seller_special_fee',
                            key: 'seller_special_fee',
                            customRender: ({ record }: { record: CalculatedAmount }): string => moneyFormatter.format(record?.seller_special_fee),
                        },
                        {
                            title: 'Association',
                            dataIndex: 'association_fee',
                            key: 'association_fee',
                            customRender: ({ record }: { record: CalculatedAmount }): string => moneyFormatter.format(record?.association_fee),
                        },
                        {
                            title: 'Storage',
                            dataIndex: 'fixed_storage_fee',
                            key: 'fixed_storage_fee',
                            customRender: ({ record }: { record: CalculatedAmount }): string => moneyFormatter.format(record?.fixed_storage_fee),
                        },
                    ]
                },
                {
                    title: 'Total',
                    key: 'total',
                    dataIndex: 'total',
                    customRender: ({ record }: { record: CalculatedAmount }): string => moneyFormatter.format(record?.total),
                },
            ],
        }
    },
})
