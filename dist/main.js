"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_exception_1 = require("./common/exception/common.exception");
const swagger_1 = require("./util/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new common_exception_1.BadRequestExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    (0, swagger_1.setupSwagger)(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map