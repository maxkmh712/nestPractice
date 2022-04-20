import { ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { BadRequestExceptionFilter } from "./common/exception/common.exception";
import { setupSwagger } from "./util/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // whiteList -> 엔티티 데코레이터에 없는 프로퍼티 값은 무조건 거름
  // forbidNonWhitelisted -> 엔티티 데코레이터에 없는 값 인입시 그 값에 대한 에러메세지 알려줌
  //   - error message : property 'xxx' should not exist
  // transform -> 컨트롤러가 값을 받을때 컨트롤러에 정의한 타입으로 형변환
  app.useGlobalFilters(new BadRequestExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableVersioning({
    type: VersioningType.URI,
  });

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
