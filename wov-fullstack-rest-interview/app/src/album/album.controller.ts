import { Controller, Get, Query } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumResponseDto } from './album-response.dto';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  async getAlbumsForArtist(
    @Query('artistId') artistId: number,
  ): Promise<AlbumResponseDto[]> {
    const albums = await this.albumService.getAlbumsForArtist(artistId);

    return albums.map((album) => ({
      id: album.AlbumId,
      title: album.Title,
    }));
  }
}
