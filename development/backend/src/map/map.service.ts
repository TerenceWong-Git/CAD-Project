import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MapService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPlacesInfo() {
    const foundPlaces = await this.prismaService.maps.findMany({
      select: {
        id: true,
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

  async getPlaceDetailById(placeId: number) {
    const foundPlaces = await this.prismaService.maps.findUnique({
      where: {
        id: placeId,
      },
      include: {
        mapType: {
          select: {
            chiType: true,
            engType: true,
          },
        },
        Comment: {
          select: {
            user: true,
            title: true,
            content: true,
            isThumb: true,
            CommentImg: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        MapToWorkingHour: {
          where: {
            mapId: placeId,
          },
          select: {
            workingHour: {
              select: {
                id: true,
                weekday: true,
                hours: true,
              },
            },
          },
        },
      },
    });
    // console.dir(foundPlaces);
    return foundPlaces;
  }
}
