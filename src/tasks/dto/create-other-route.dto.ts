
import { ApiProperty } from '@nestjs/swagger';

export class CreateOtherRouteDto {
  @ApiProperty()
  valueOne: string;

  @ApiProperty()
  valueTwo: string;
}