import { Test, TestingModule } from '@nestjs/testing';
import { ProductoOrmService } from './producto-orm.service';

describe('ProductoOrmService', () => {
  let service: ProductoOrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoOrmService],
    }).compile();

    service = module.get<ProductoOrmService>(ProductoOrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
