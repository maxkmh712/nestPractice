import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { MovieDirector } from "src/movie-director/entities/movie-director.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Movie extends CoreEntity {
  @Column()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsOptional()
  @IsString()
  director: string;

  @Column()
  @IsOptional()
  @IsNumber()
  year: number;

  @ManyToOne((type) => MovieDirector, (moviedirector) => moviedirector.movies, {
    onDelete: "SET NULL",
  })
  moviedirector: MovieDirector;
}
