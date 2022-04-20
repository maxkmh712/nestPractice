import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { UpdateOrderStateDto } from './dto/update-order-state.dto';
export declare class OrderStateService {
    create(createOrderStateDto: CreateOrderStateDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderStateDto: UpdateOrderStateDto): string;
    remove(id: number): string;
}
