import { DataSource } from 'typeorm';
import { Link } from './entities/link.entity';
import { CreateLinksTable1709999999999 } from './migrations/1709999999999-CreateLinksTable';
import { AddCreatedAtToLinks1710000000000 } from './migrations/1710000000000-AddCreatedAtToLinks';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'linksaver',
  entities: [Link],
  migrations: [CreateLinksTable1709999999999, AddCreatedAtToLinks1710000000000],
  synchronize: false,
});
