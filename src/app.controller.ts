import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('reports')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('jpg')
  getJpg() {
    return this.appService.getJpg();
  }
}
