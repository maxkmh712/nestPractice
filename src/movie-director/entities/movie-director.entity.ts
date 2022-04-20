import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { Movie } from "src/movie/entities/movie.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class MovieDirector extends CoreEntity {
  @Column()
  @IsString()
  name: string;

  @Column()
  @IsNumber()
  age: number;

  @OneToMany((type) => Movie, (movie) => movie.moviedirector)
  movies: Movie[];
}
