import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { MovieDirectorService } from "./movie-director.service";
import { CreateMovieDirectorDto } from "./dto/create-movie-director.dto";
import { UpdateMovieDirectorDto } from "./dto/update-movie-director.dto";

@Controller("movie-director")
export class MovieDirectorController {
  constructor(private readonly movieDirectorService: MovieDirectorService) {}

  @Post()
  create(@Body() createMovieDirectorDto: CreateMovieDirectorDto) {
    return this.movieDirectorService.createMovieDirector(
      createMovieDirectorDto,
    );
  }

  @Get()
  findAll() {
    return this.movieDirectorService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.movieDirectorService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateMovieDirectorDto: UpdateMovieDirectorDto,
  ) {
    return this.movieDirectorService.update(+id, updateMovieDirectorDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.movieDirectorService.remove(+id);
  }
}
