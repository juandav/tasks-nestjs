import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TasksMiddleware implements NestMiddleware {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  use(req: any, res: any, next: () => void) {
    console.log(`${new Date()} - `, req.ip, ' - pepito');
    return next();
  }
}
