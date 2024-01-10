import  { httpClient }  from '../api/api'
import type { CarType } from '../interfaces/CarType'
import type {FormCreateAuctionSale} from "@/shared/interfaces/FormCreateAuctionSale";

const useCarType = () => {
    
    const getAllCarTypes = async (): Promise<{data: CarType[]}> => {
        return await httpClient.get<CarType[]>('/v1/car-types')
    }

    const calculateTotalPrice = async (data: FormCreateAuctionSale): Promise<{data: CarType[]}> => {
        return await httpClient.post<CarType[]>('/v1/car-types')
    }

    return { getAllCarTypes }
}

export default useCarType