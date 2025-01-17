import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TrackService {
  async getTracks(query: any): Promise<any[]> {
    const { artistName, genreName, minPrice, maxPrice, page = 0, pageSize = 10 } = query;

    const where: any = {};

    if (artistName) {
      where.Album = { Artist: { Name: { contains: artistName } } };
    }

    if (genreName) {
      where.Genre = { Name: { contains: genreName } };
    }

    if (minPrice !== undefined) {
      where.UnitPrice = { gte: minPrice };
    }

    if (maxPrice !== undefined) {
      where.UnitPrice = { lt: maxPrice };
    }

    const tracks = await prisma.track.findMany({
      where,
      include: {
        Genre: true,
        Album: { include: { Artist: true } },
      },
      skip: page * parseInt(pageSize, 10),
      take: parseInt(pageSize, 10),
    });

    return tracks.map((track) => ({
      id: track.TrackId,
      name: track.Name,
      price: track.UnitPrice,
      duration: track.Milliseconds / 1000,
      genre: track.Genre?.Name || 'Unknown',
      artist: track.Album?.Artist?.Name || 'Unknown',
    }));
  }
  async getTrackById(id: string): Promise<any> {
    const track = await prisma.track.findUnique({
      where: { TrackId: Number(id) },
      include: {
        Genre: true,
        Album: { include: { Artist: true } },
      },
    });
  
    if (!track) {
      throw new Error('Track not found');
    }
  
    return {
      id: track.TrackId,
      name: track.Name,
      price: track.UnitPrice,
      duration: track.Milliseconds / 1000,
      genre: track.Genre?.Name || 'Unknown',
      artist: track.Album?.Artist?.Name || 'Unknown',
    };
  }
}
