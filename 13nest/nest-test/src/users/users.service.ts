import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersDocument, Users } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModule: Model<UsersDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = await this.usersModule.create(createUserDto);
    return createUser;
  }

  async findAll() {
    const allUser = await this.usersModule.find().exec();
    return allUser;
  }

  async findOne(id: string) {
    const findUser = await this.usersModule.findById(id).exec();
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.usersModule
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    return updateUser;
  }

  async remove(id: string) {
    const removeUser = await this.usersModule.findByIdAndRemove(id).exec();
    return removeUser;
  }
}
