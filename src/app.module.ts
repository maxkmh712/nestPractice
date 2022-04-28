import { Module } from "@nestjs/common";
import { CommonModule } from "./common/common.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { ContentModule } from "./content/content.module";
import { UserinfoModule } from "./userinfo/userinfo.module";
import { Users } from "./users/entities/users.entity";
import { Content } from "./content/entities/content.entity";
import { Userinfo } from "./userinfo/entities/userinfo.entity";
import { ImageModule } from "./image/image.module";
import { UploadFileModule } from "./upload-file/upload-file.module";
import { UploadFile } from "./upload-file/entities/upload-file.entity";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { APP_FILTER, APP_GUARD } from "@nestjs/core";
import { BadRequestExceptionFilter } from "./common/exception/common.exception";
import { OrderModule } from "./order/order.module";
import { Order } from "./order/entities/order.entity";
import { OrderStateModule } from "./order-state/order-state.module";
import { OrderState } from "./order-state/entities/order-state.entity";
import { MovieController } from "./movie/movie.controller";
import { MovieModule } from "./movie/movie.module";
import { Movie } from "./movie/entities/movie.entity";
import { MovieDirectorModule } from "./movie-director/movie-director.module";
import { MovieDirector } from "./movie-director/entities/movie-director.entity";
import { MovieDirectorController } from "./movie-director/movie-director.controller";
import { RolesGuard } from "./role/role.guard";

@Module({
  imports: [
    ConfigModule.forRoot({
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
        // MAILGUN_API_KEY: Joi.string().required(),
        // MAILGUN_DOMAIN_NAME: Joi.string().required(),
        // MAILGUN_FROM_EMAIL: Joi.string().required(),
      }),
    }),
    CommonModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.PS_DB_HOST,
      port: +process.env.PS_DB_PORT,
      username: process.env.PS_DB_USERNAME,
      password: process.env.PS_DB_PASSWORD,
      database: process.env.PS_DB_NAME,
      synchronize: true,
      logging: false,
      entities: [
        Users,
        Content,
        Userinfo,
        UploadFile,
        Order,
        OrderState,
        Movie,
        MovieDirector,
      ],
    }),
    UsersModule,
    ContentModule,
    UserinfoModule,
    ImageModule,
    UploadFileModule,
    AuthModule,
    OrderModule,
    OrderStateModule,
    MovieModule,
    MovieDirectorModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
