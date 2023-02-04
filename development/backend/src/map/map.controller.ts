import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Get()
  async getPlacesInfo() {
    return await this.mapService.getPlacesInfo();
  }

  @Get('/:id')
  async getCommentDetailById(@Param('id', ParseIntPipe) placeId: number) {
    const result = await this.mapService.getPlaceDetailById(placeId);
    return result;
  }
}
