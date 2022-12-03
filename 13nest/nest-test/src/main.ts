import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// swagger文档
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置Swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('邢浩东nest接口文档')
    .setDescription('Base URL: http://127.0.0.1:3000/api-doc/ ') // 文档描述
    .setVersion('1.0') // 文档版本
    .build();
  // 创建Swagger文档实例
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  // 设置文档地址
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
