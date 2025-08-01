import { Test, TestingModule } from '@nestjs/testing';
import { StockLogicaController } from './stock-logica.controller';

describe('StockLogicaController', () => {
  let controller: StockLogicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockLogicaController],
    }).compile();

    controller = module.get<StockLogicaController>(StockLogicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
