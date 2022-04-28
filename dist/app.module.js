"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const common_module_1 = require("./common/common.module");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const content_module_1 = require("./content/content.module");
const userinfo_module_1 = require("./userinfo/userinfo.module");
const users_entity_1 = require("./users/entities/users.entity");
const content_entity_1 = require("./content/entities/content.entity");
const userinfo_entity_1 = require("./userinfo/entities/userinfo.entity");
const image_module_1 = require("./image/image.module");
const upload_file_module_1 = require("./upload-file/upload-file.module");
const upload_file_entity_1 = require("./upload-file/entities/upload-file.entity");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const core_1 = require("@nestjs/core");
const common_exception_1 = require("./common/exception/common.exception");
const order_module_1 = require("./order/order.module");
const order_entity_1 = require("./order/entities/order.entity");
const order_state_module_1 = require("./order-state/order-state.module");
const order_state_entity_1 = require("./order-state/entities/order-state.entity");
const movie_module_1 = require("./movie/movie.module");
const movie_entity_1 = require("./movie/entities/movie.entity");
const movie_director_module_1 = require("./movie-director/movie-director.module");
const movie_director_entity_1 = require("./movie-director/entities/movie-director.entity");
const role_guard_1 = require("./role/role.guard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV === "develop" ? ".env" : ".env",
                ignoreEnvFile: process.env.NODE_ENV === "production",
                validationSchema: Joi.object({
                    NODE_ENV: Joi.string().valid("develop", "production", "test"),
                    PS_DB_HOST: Joi.string().required(),
                    PS_DB_PORT: Joi.number().required(),
                    PS_DB_USERNAME: Joi.string().required(),
                    PS_DB_PASSWORD: Joi.string().required(),
                    PS_DB_NAME: Joi.string().required(),
                    AWS_S3_BUCKET_NAME: Joi.string().required(),
                    AWS_ACCESS_KEY_ID: Joi.string().required(),
                    AWS_SECRET_ACCESS_KEY: Joi.string().required(),
                    AWS_REGION: Joi.string().required(),
                    GOOGLE_CLIENT_ID: Joi.string().required(),
                    GOOGLE_SECRET_ACCESS_KEY: Joi.string().required(),
                    GOOGLE_REDIRECT_URL: Joi.string().required(),
                }),
            }),
            common_module_1.CommonModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: process.env.PS_DB_HOST,
                port: +process.env.PS_DB_PORT,
                username: process.env.PS_DB_USERNAME,
                password: process.env.PS_DB_PASSWORD,
                database: process.env.PS_DB_NAME,
                synchronize: true,
                logging: false,
                entities: [
                    users_entity_1.Users,
                    content_entity_1.Content,
                    userinfo_entity_1.Userinfo,
                    upload_file_entity_1.UploadFile,
                    order_entity_1.Order,
                    order_state_entity_1.OrderState,
                    movie_entity_1.Movie,
                    movie_director_entity_1.MovieDirector,
                ],
            }),
            users_module_1.UsersModule,
            content_module_1.ContentModule,
            userinfo_module_1.UserinfoModule,
            image_module_1.ImageModule,
            upload_file_module_1.UploadFileModule,
            auth_module_1.AuthModule,
            order_module_1.OrderModule,
            order_state_module_1.OrderStateModule,
            movie_module_1.MovieModule,
            movie_director_module_1.MovieDirectorModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: common_exception_1.BadRequestExceptionFilter,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: role_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map