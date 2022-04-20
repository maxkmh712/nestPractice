import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { MovieService } from "./movie.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";

@Controller("movie")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  create(@Body() movieDate: CreateMovieDto) {
    return this.movieService.createMovie(movieDate);
  }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(":movieId")
  async findOne(@Param("movieId") movieId: string): Promise<Movie> {
    const foundMovie = await this.movieService.findOne(movieId);
    return Object.assign({
      data: foundMovie,
      statusCode: 200,
      message: "해당 영화 찾기 성공!!!",
    });
  }

  // @Get("search")
  // search(
  //   @Query("name") movieName: string,
  //   @Query("year") searchingYear: string,
  // ) {
  //   return `We are searching for a movie with a title ${movieName} and ${searchingYear}`;
  // }

  @Patch(":movieId") // ':id' 와 'id' 값이 같아야 한다. id: string는 달라도 됨
  async update(
    @Param("movieId") id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(":movieId")
  async deleteMovie(@Param("movieId") movieId: string): Promise<Movie> {
    await this.movieService.deleteOne(movieId);
    return Object.assign({
      data: { movieId: movieId },
      statusCode: 201,
      message: "해당 영화 삭제 성공!!!!!",
    });
  }
}
