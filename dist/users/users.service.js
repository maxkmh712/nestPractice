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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entities/users.entity");
const bcrypt = require("bcrypt");
const user_error_1 = require("./error/user.error");
let UsersService = class UsersService {
    constructor(userRepository, userError) {
        this.userRepository = userRepository;
        this.userError = userError;
    }
    async create(userData) {
        try {
            const { email, username, password, role, provider } = userData;
            if (provider === "local" && !password) {
                throw Error(user_error_1.USER_ERROR.NOT_ENTER_PASSWORD);
            }
            const user = new users_entity_1.Users();
            user.email = email;
            user.password = password ? await this.hash(password) : null;
            user.username = username;
            user.provider = provider;
            user.role = role;
            const createUser = await this.userRepository.save(user);
            if (!createUser) {
                throw Error(user_error_1.USER_ERROR.USER_CREATE_FAILED);
            }
            return createUser;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(this.userError.errorHandler(error.message));
        }
    }
    async hash(txt) {
        const saltOrRounds = 10;
        return await bcrypt.hash(txt, saltOrRounds);
    }
    async isHashValid(password, hashPassword) {
        return await bcrypt.compare(password, hashPassword);
    }
    async findOneAdmin(query) {
        return await this.userRepository.findOne({
            where: query,
        });
    }
    async findOne(query) {
        const user = await this.userRepository.findOne({
            select: { username: true, email: true, id: true, provider: true },
            where: query,
        });
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_error_1.UserError])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map