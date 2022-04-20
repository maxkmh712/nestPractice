import { Module } from "@nestjs/common";
import { MovieDirectorService } from "./movie-director.service";
import { MovieDirectorController } from "./movie-director.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movie } from "src/movie/entities/movie.entity";
import { MovieDirector } from "./entities/movie-director.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MovieDirector, Movie])],
  controllers: [MovieDirectorController],
  providers: [MovieDirectorService],
  exports: [MovieDirectorService],
})
export class MovieDirectorModule {}
