import { Controller, Get, Query } from '@nestjs/common';
import { TrackService } from './track.service';
import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

class TrackQueryDto {
  @IsOptional()
  @IsString()
  artistName?: string;

  @IsOptional()
  @IsString()
  genreName?: string;

  @IsOptional()
  @IsNumber()
  minPrice?: number;

  @IsOptional()
  @IsNumber()
  maxPrice?: number;

  @IsOptional()
  @Min(0)
  page?: number;

  @IsOptional()
  @Min(1)
  pageSize?: number;
}

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  async getTracks(@Query() query: TrackQueryDto) {
    return this.trackService.getTracks(query);
  }

  @Get(':id')
  async getTrackById(@Query('id') id: string) {
    return this.trackService.getTrackById(id);
  }
}
