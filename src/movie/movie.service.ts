import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MovieDirector } from "src/movie-director/entities/movie-director.entity";
import { Repository } from "typeorm";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>, // private readonly moviedirectorRepository: Repository<MovieDirector>,
  ) {
    this.movieRepository = movieRepository;
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<void> {
    // const moviedirector = await this.moviedirectorRepository.findOne({
    //   relations: ["movie"],
    // });

    const movie = new Movie();

    movie.title = createMovieDto.title;
    movie.director = createMovieDto.director;
    movie.year = createMovieDto.year;
    movie.moviedirector = createMovieDto.moviedirector;

    await this.movieRepository.save(movie);
  }

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne({
      where: { id: id },
      relations: ["moviedirector"],
    });
  }
  // // +id 이것도 string을 number로 바꿔주는 것

  update(id: any, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = new Movie();

    movie.title = updateMovieDto.title;
    movie.director = updateMovieDto.director;
    movie.year = updateMovieDto.year;

    return this.movieRepository.save(movie);
  }

  async deleteOne(id: string): Promise<void> {
    await this.movieRepository.delete({ id: id });
  }
}
