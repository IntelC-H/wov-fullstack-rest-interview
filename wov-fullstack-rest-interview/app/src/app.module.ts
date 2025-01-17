import { Module } from '@nestjs/common';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [AlbumModule],
})
export class AppModule {}
