import { defineComponent } from 'vue'
import { CalculatorOutlined } from '@ant-design/icons-vue';
import VehicleTable from '../vehicle-table/VehicleTable.vue';
import useCarType from '@/shared/composables/VehicleType';
import type { CarType } from '@/shared/interfaces/CarType';
import type {FormCreateAuctionSale} from "@/shared/interfaces/FormCreateAuctionSale";
import auctionSale from '@/shared/composables/AuctionSale';
import type { CalculatedAmount } from '@/shared/interfaces/CalculatedAmount';
import { message as notification } from 'ant-design-vue';

export default defineComponent({
    name: 'NewVehicleModal',

    components: {
        CalculatorOutlined,
        VehicleTable,
    },

    props: {
        open: { type: Boolean, default: false },
    },

    setup () {
        const { getAllCarTypes } = useCarType()

        const { calculateTotalPrice, save } = auctionSale()

        return {
            getAllCarTypes,
            calculateTotalPrice,
            save,
        }
    },

    data () {
        return {
            carTypes: [] as CarType[],
            form: {
                carTypeId: '',
                price: 0,
            } as FormCreateAuctionSale,
            calculatedValues: null as CalculatedAmount | null,
        }
    },

    created () {
        this.getCarTypes()
    },

    methods: {
        async getCarTypes (): Promise<void>{
            const { data } = await this.getAllCarTypes()
            this.carTypes = data
        },

        handleCancel (): void {
            this.clearData()

            this.$emit('cancel')
        },

        async handleSave (): Promise<void> {
            const { message } = await this.save(this.form)

            notification.success(message)

            this.$emit('refreshAuctionSales')

            this.handleCancel()
        },

        async calculate (): Promise<void> {
            const { data } = await this.calculateTotalPrice(this.form)

            this.calculatedValues = data
        },

        clearData (): void {
            this.calculatedValues = null

            this.form = {
                carTypeId: '',
                price: 0,
            }
        }
    }
})
