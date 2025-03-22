import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from '../entities/link.entity';
import { CreateLinkDto } from './dto/create-link.dto';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private linksRepository: Repository<Link>,
  ) {}

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const link = this.linksRepository.create(createLinkDto);
    return await this.linksRepository.save(link);
  }

  async findAll(): Promise<Link[]> {
    return await this.linksRepository.find();
  }

  async findOne(uuid: string): Promise<Link> {
    const link = await this.linksRepository.findOne({ where: { uuid } });
    if (!link) {
      throw new NotFoundException(`Link with UUID "${uuid}" not found`);
    }
    return link;
  }

  async update(
    uuid: string,
    updateLinkDto: Partial<CreateLinkDto>,
  ): Promise<Link> {
    const link = await this.findOne(uuid);
    Object.assign(link, updateLinkDto);
    return await this.linksRepository.save(link);
  }

  async remove(uuid: string): Promise<void> {
    const result = await this.linksRepository.delete(uuid);
    if (result.affected === 0) {
      throw new NotFoundException(`Link with UUID "${uuid}" not found`);
    }
  }
}
