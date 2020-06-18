import { Controller, Get, InternalServerErrorException, UseFilters } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';
import { AllTasksExceptionsFilter } from '../common/filters/tasks.filter'

@Crud({
  model: {
    type: Tasks
  }
})
@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(public service: TasksService) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Get('/otherRoute')
  @UseFilters(new AllTasksExceptionsFilter())
  getOtherRouter() {
    throw new InternalServerErrorException();
  }
}
