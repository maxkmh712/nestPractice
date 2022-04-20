import { IsNumber, IsString, IsUUID } from "class-validator";
import { Movie } from "src/movie/entities/movie.entity";
import { Column } from "typeorm";

export class CreateMovieDirectorDto {
  @Column()
  @IsString()
  name: string;

  @Column()
  @IsNumber()
  age: number;

  @Column()
  movies: Movie[];
}
