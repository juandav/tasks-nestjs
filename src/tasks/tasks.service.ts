import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService extends TypeOrmCrudService<Tasks>{
  constructor(@InjectRepository(Tasks) repo) {
    super(repo);
  }

  modfyDataBD(data: any){
    // almacenan bd
    // adadadadad 
  }
}
