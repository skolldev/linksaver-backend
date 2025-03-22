import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { Link } from '../entities/link.entity';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  create(@Body() createLinkDto: CreateLinkDto): Promise<Link> {
    return this.linksService.create(createLinkDto);
  }

  @Get()
  findAll(): Promise<Link[]> {
    return this.linksService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string): Promise<Link> {
    return this.linksService.findOne(uuid);
  }

  @Put(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateLinkDto: Partial<CreateLinkDto>,
  ): Promise<Link> {
    return this.linksService.update(uuid, updateLinkDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string): Promise<void> {
    return this.linksService.remove(uuid);
  }
}
