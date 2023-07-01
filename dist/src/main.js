"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const config_2 = require("./constants/config");
const exception_filter_1 = require("./errors/exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        credentials: true,
        origin: configService.get(config_2.EnvKey.CLIENT_BASE_URL),
    });
    app.use(cookieParser());
    app.setGlobalPrefix(configService.get(config_2.EnvKey.BASE_PATH));
    app.useGlobalFilters(new exception_filter_1.GlobalExceptionFilter());
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('API Documents')
        .setDescription('Document for server api')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup(configService.get(config_2.EnvKey.DOCS_PATH), app, swaggerDocument, {
        swaggerOptions: { withCredentials: true },
    });
    await app.listen(configService.get(config_2.EnvKey.PORT));
}
bootstrap();
//# sourceMappingURL=main.js.map