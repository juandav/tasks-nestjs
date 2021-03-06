import { 
  Controller, 
  Get, 
  Post, 
  UsePipes, 
  Body, 
  UseInterceptors, 
  Request,
  UseGuards
} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';
import { TasksPipe } from './tasks.pipe';
import { createOtherRouterSchema } from './schemas/createOhertTask.schema';
import { CreateOtherRouteDto } from './dto/create-other-route.dto';
import { TasksInterceptor } from './tasks.interceptor';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Crud({
  model: {
    type: Tasks
  }
})
@ApiTags('Tasks')
@UseInterceptors(new TasksInterceptor())
@Controller('tasks')
@UseGuards(RolesGuard)
export class TasksController {
  constructor(public service: TasksService) {}

  @Get('/otherRoute')
  @Roles('provider', 'admin')
  getOtherRouter() {
    return "data"
  }

  @Post('/otherRoute')
  @UsePipes(new TasksPipe(createOtherRouterSchema))
  createOtherRouter(@Request() req, @Body() createOtherRouter: CreateOtherRouteDto) {  
    console.log("NEW CUSTOM REQUEST DATA", req.customData);
    this.service.modfyDataBD(createOtherRouter)
    return createOtherRouter;
  }
}
