import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MapService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPlacesInfo() {
    const foundPlaces = await this.prismaService.maps.findMany({
      select: {
        // mapTypeId: true,
        chiName: true,
        engName: true,
        email: true,
        phoneNumber: true,
        chiAddress: true,
        engAddress: true,
        district: true,
        latitude: true,
        longitude: true,
        profileImg: true,
        mapType: {
          select: {
            chiType: true,
            engType: true,
          },
        },
      },
    });
    console.dir(foundPlaces);
    return foundPlaces;
  }
}
