import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ description: '邮箱' })
  readonly email: string; //只读不能被修改
  @ApiProperty({ description: '密码', default: '123456' })
  password: string;
  @ApiProperty({ description: '用户名', default: '小李飞刀 ' })
  username: string;
}
