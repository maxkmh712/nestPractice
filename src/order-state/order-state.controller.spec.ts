import { Test, TestingModule } from '@nestjs/testing';
import { OrderStateController } from './order-state.controller';
import { OrderStateService } from './order-state.service';

describe('OrderStateController', () => {
  let controller: OrderStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderStateController],
      providers: [OrderStateService],
    }).compile();

    controller = module.get<OrderStateController>(OrderStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
