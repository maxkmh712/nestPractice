"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieDirectorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_movie_director_dto_1 = require("./create-movie-director.dto");
class UpdateMovieDirectorDto extends (0, swagger_1.PartialType)(create_movie_director_dto_1.CreateMovieDirectorDto) {
}
exports.UpdateMovieDirectorDto = UpdateMovieDirectorDto;
//# sourceMappingURL=update-movie-director.dto.js.map