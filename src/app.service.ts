import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Db } from 'mongodb';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject('MONGO') private dataBase: Db,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const name = this.configService.database.name;
    return `Hello World! ${name}`;
  }
  getTasks() {
    const tasksCollection = this.dataBase.collection('tasks');
    return tasksCollection.find().toArray();
  }
}
