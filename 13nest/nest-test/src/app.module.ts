import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
//Module是装饰器
@Module({
  //引入子模块
  imports: [
    VideoModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/express-video'),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
