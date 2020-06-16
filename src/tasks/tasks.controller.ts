import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';

@Crud({
  model: {
    type: Tasks
  }
})
@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(public service: TasksService) {}
}
