import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { Database } from 'sqlite3';

@Module({
  controllers: [AlbumController],
  providers: [
    AlbumService,
    {
      provide: Database,
      useFactory: () => new Database('chinook.sqlite'),
    },
  ],
})
export class AlbumModule {}
