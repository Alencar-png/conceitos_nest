import { Controller, Get } from '@nestjs/common';
import { ConceitosManualService } from './conceitos-manual.service';

@Controller()
export class ConceitosManualController {
    constructor(private readonly appService: ConceitosManualService) {}

    @Get("hello")
    getHello(): string {
        return this.appService.getHello();
    }

    @Get("time")
    getTime(): string {
        return this.appService.getTime();
    }

}
