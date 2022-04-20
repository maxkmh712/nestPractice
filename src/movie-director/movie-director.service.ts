import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { CreateMovieDirectorDto } from "./dto/create-movie-director.dto";
import { UpdateMovieDirectorDto } from "./dto/update-movie-director.dto";
import { MovieDirector } from "./entities/movie-director.entity";

@Injectable()
export class MovieDirectorService {
  constructor(
    @InjectRepository(MovieDirector)
    private readonly moviedirectorRepository: Repository<MovieDirector>,
  ) {
    this.moviedirectorRepository = moviedirectorRepository;
  }

  async createMovieDirector(
    createMovieDirectorDto: CreateMovieDirectorDto,
  ): Promise<void> {
    const moviedirector = new MovieDirector();

    moviedirector.name = createMovieDirectorDto.name;
    moviedirector.age = createMovieDirectorDto.age;
    moviedirector.movies = createMovieDirectorDto.movies;

    await this.moviedirectorRepository.save(moviedirector);
  }

  findAll() {
    return `This action returns all movieDirector`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movieDirector`;
  }

  update(id: number, updateMovieDirectorDto: UpdateMovieDirectorDto) {
    return `This action updates a #${id} movieDirector`;
  }

  remove(id: number) {
    return `This action removes a #${id} movieDirector`;
  }
}
