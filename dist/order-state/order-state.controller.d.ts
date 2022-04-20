import { OrderStateService } from './order-state.service';
import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { UpdateOrderStateDto } from './dto/update-order-state.dto';
export declare class OrderStateController {
    private readonly orderStateService;
    constructor(orderStateService: OrderStateService);
    create(createOrderStateDto: CreateOrderStateDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderStateDto: UpdateOrderStateDto): string;
    remove(id: string): string;
}
