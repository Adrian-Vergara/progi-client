import { defineComponent } from 'vue';
import NewVehicleModal from "./components/new-vehicle-modal/NewVehicleModal.vue";
import VehicleTable from "./components/vehicle-table/VehicleTable.vue";
import auctionSale from '@/shared/composables/AuctionSale';
import type { CalculatedAmount } from '@/shared/interfaces/CalculatedAmount';

export default defineComponent({
    name: "VehicleAuction",

    components: {
        NewVehicleModal,
        VehicleTable,
    },

    setup () {
        const { getAll } = auctionSale()

        return {
            getAll,
        }
    },

    data () {
        return {
            showModal: false,
            auctionSales: [] as CalculatedAmount[],
        }
    },

    created () {
        this.getAllAuctionSales()
    },

    methods: {
        toggleShowModal (value: boolean): void {
            this.showModal = value
        },

        async getAllAuctionSales (): Promise<void>{
            const { data } = await this.getAll()

            this.auctionSales = data
        },
    }
});
