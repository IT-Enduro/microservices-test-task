import { All, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @All('*')
  getHello(): string {
    const name: string = this.configService.get('GREETING_NAME');
    return this.appService.getHello(name);
  }
}
