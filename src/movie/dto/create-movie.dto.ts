import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { MovieDirector } from "src/movie-director/entities/movie-director.entity";
import { Column } from "typeorm";

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  director: string;

  @IsNumber()
  year: number;

  @IsString()
  moviedirector: MovieDirector;
  // 타입을 엔티티로 해줘야 함
}
