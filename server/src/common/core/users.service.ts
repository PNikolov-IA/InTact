import { UserPasswordDTO } from './../../models/user/user-password.dto';
import { GetUserDTO } from '../../models/user/get-user.dto';
import { UserLoginDTO } from '../../models/user/user-login.dto';
import { UserRegisterDTO } from '../../models/user/user-register.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './../../data/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './../../interfaces/jwt-payload';
import { UserEditDTO } from '../../models/user/user-edit.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async registerUser(user: UserRegisterDTO) {
    const userFound = await this.usersRepository.findOne({ where: { email: user.email } });

    if (userFound) {
      throw new Error('User already exists');
    }
    const newUser = new User();
    if (user.FirstName) {
      newUser.FirstName = user.FirstName;
    } else {
      newUser.FirstName = null;
    }

    if (user.LastName) {
      newUser.LastName = user.LastName;
    } else {
      newUser.LastName = null;
    }

    newUser.email = user.email;
    newUser.password = await bcrypt.hash(user.password, 10);
    newUser.isAdmin = true;

    await this.usersRepository.create(newUser);
    await this.usersRepository.save([newUser]);
    const userSaved = await this.usersRepository.findOne({ where: { email: newUser.email } });
    newUser.adminUser = userSaved;
    const result = await this.usersRepository.save([newUser]);

    return result;
  }

  async validateUser(payload: JwtPayload): Promise<GetUserDTO> {
    const userFound: any = await this.usersRepository.findOne({ where: { email: payload.email } });
    return userFound;
  }

  async signIn(user: UserLoginDTO): Promise<GetUserDTO> {
    const userFound: GetUserDTO = await this.usersRepository.findOne({ select: ['email', 'isAdmin', 'password'], where: { email: user.email } });

    if (userFound) {
      const result = await bcrypt.compare(user.password, userFound.password);
      if (result) {
        return userFound;
      }
    }

    return null;
  }

  async getAll(admin: User) {
    return await this.usersRepository.find({ where: { adminUser: admin } });
  }

  async addUser(user: UserRegisterDTO, admin: User) {
    const userFound = await this.usersRepository.findOne({ where: { email: user.email } });
    if (userFound) {
      throw new Error('User already exists');
    }
    const newUser = new User();
    if (user.FirstName) {
      newUser.FirstName = user.FirstName;
    } else {
      newUser.FirstName = null;
    }

    if (user.LastName) {
      newUser.LastName = user.LastName;
    } else {
      newUser.FirstName = null;
    }
    newUser.email = user.email;
    newUser.password = await bcrypt.hash(user.password, 10);
    newUser.adminUser = admin;

    await this.usersRepository.create(newUser);
    const result = await this.usersRepository.save([newUser]);
    return result;
  }

  async deleteUser(email, req): Promise<any> {

    const userFound = await this.usersRepository
      .findOne({ where: { email, adminUser: req } });

    if (!userFound) {
      throw new Error('User doesnt exists');
    }

    await this.usersRepository.delete(userFound);

  }

  async editUser(user: UserEditDTO, req): Promise<any> {

    const userFound = await this.usersRepository
      .findOne({ where: { email: user.email } });

    if (userFound && (user.FirstName || user.LastName)) {
      userFound.FirstName = user.FirstName;
      userFound.LastName = user.LastName;
    }
    else {
      throw new Error('No such user!');
    }

    // await this.usersRepository.create(newUser);
    const result = await this.usersRepository.save(userFound);
    return result;
  }

  async changePassword(user: UserPasswordDTO, req): Promise<any> {
    const loggedUserId = req.user.id;

    const userFound = await this.usersRepository
      .findOne({ where: { id: loggedUserId } });

    const result = await bcrypt.compare(user.oldPassword, userFound.password);

    if (result) {
      userFound.password = await bcrypt.hash(user.newPassword, 10);
    }
    else {
      throw new Error('password doesnt match');
    }
    await this.usersRepository.update(loggedUserId, userFound);
  }
}
