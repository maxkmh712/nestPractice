import { Test, TestingModule } from '@nestjs/testing';
import { MovieDirectorController } from './movie-director.controller';
import { MovieDirectorService } from './movie-director.service';

describe('MovieDirectorController', () => {
  let controller: MovieDirectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieDirectorController],
      providers: [MovieDirectorService],
    }).compile();

    controller = module.get<MovieDirectorController>(MovieDirectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
