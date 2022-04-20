import { PartialType } from '@nestjs/swagger';
import { CreateMovieDirectorDto } from './create-movie-director.dto';

export class UpdateMovieDirectorDto extends PartialType(CreateMovieDirectorDto) {}
