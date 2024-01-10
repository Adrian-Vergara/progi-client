import type { CarType } from '@/shared/interfaces/CarType';

export interface CalculatedAmount {
    car_type: CarType,
    price: number,
    basic_user_fee: number,
    seller_special_fee: number,
    association_fee: number,
    fixed_storage_fee: number,
    total: number,
}