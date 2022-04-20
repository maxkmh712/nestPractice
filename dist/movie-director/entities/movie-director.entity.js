"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDirector = void 0;
const class_validator_1 = require("class-validator");
const core_entitiy_1 = require("../../common/entities/core.entitiy");
const movie_entity_1 = require("../../movie/entities/movie.entity");
const typeorm_1 = require("typeorm");
let MovieDirector = class MovieDirector extends core_entitiy_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MovieDirector.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MovieDirector.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => movie_entity_1.Movie, (movie) => movie.moviedirector),
    __metadata("design:type", Array)
], MovieDirector.prototype, "movies", void 0);
MovieDirector = __decorate([
    (0, typeorm_1.Entity)()
], MovieDirector);
exports.MovieDirector = MovieDirector;
//# sourceMappingURL=movie-director.entity.js.map