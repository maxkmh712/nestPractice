import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderStateService } from './order-state.service';
import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { UpdateOrderStateDto } from './dto/update-order-state.dto';

@Controller('order-state')
export class OrderStateController {
  constructor(private readonly orderStateService: OrderStateService) {}

  @Post()
  create(@Body() createOrderStateDto: CreateOrderStateDto) {
    return this.orderStateService.create(createOrderStateDto);
  }

  @Get()
  findAll() {
    return this.orderStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderStateDto: UpdateOrderStateDto) {
    return this.orderStateService.update(+id, updateOrderStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderStateService.remove(+id);
  }
}
