import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Get()
  //   @UseGuards(JwtGuard)
  async getPlacesInfo() {
    return await this.mapService.getPlacesInfo();
  }
}
