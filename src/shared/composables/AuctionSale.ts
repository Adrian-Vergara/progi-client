import { httpClient } from '../api/api'
import type { FormCreateAuctionSale } from '@/shared/interfaces/FormCreateAuctionSale';
import type { CalculatedAmount } from '@/shared/interfaces/CalculatedAmount';

const auctionSale = () => {

    const getAll = async (): Promise<{ data: CalculatedAmount[] }> => {
        return await httpClient.get<CalculatedAmount[]>(`/v1/auction-sales`)
    }

    const calculateTotalPrice = async (data: FormCreateAuctionSale): Promise<{ data: CalculatedAmount }> => {
        return await httpClient.post<CalculatedAmount>(
            `/v1/car-types/${ data.carTypeId }/calculate-total-price`,
            {
                id: data.carTypeId,
                price: data.price,
            },
        )
    }

    const save = async (data: FormCreateAuctionSale): Promise<{ message: string, data: { id: string } }> => {
        return await httpClient.post<{ message: string, data: { id: string } }>(
            `/v1/car-types/${ data.carTypeId }/auction-sales`,
            {
                car_type_id: data.carTypeId,
                price: data.price,
            },
        )
    }

    return { getAll, calculateTotalPrice, save }
}

export default auctionSale