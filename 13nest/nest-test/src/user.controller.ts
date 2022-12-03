import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class UserController {
  //依赖注入
  // constructor(private readonly appService: AppService) {}

  //路由装饰器
  @Get('/user')
  getHello(): string {
    return 'user nest';
  }
}
