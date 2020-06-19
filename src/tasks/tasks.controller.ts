import { Controller, Get, InternalServerErrorException, UseFilters, Post, UsePipes, Body } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';
import { AllTasksExceptionsFilter } from '../common/filters/tasks.filter';
import { TasksPipe } from './tasks.pipe';
import { createOtherRouterSchema } from './schemas/createOhertTask.schema';
import { CreateOtherRouteDto } from './dto/create-other-route.dto';

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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post('/otherRoute')
  @UsePipes(new TasksPipe(createOtherRouterSchema))
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  createOtherRouter(@Body() createOtherRouter: CreateOtherRouteDto) {
    // llamadas a los servicios
    console.log("data transformada: ", createOtherRouter)
    this.service.modfyDataBD(createOtherRouter)
    return createOtherRouter;
  }
}
