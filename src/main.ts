import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueryFailedFilter } from './utils/QueryFailedFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true })
  );    //! whitelist will include only those fields that are present in DTO

  app.useGlobalFilters(new QueryFailedFilter());
  await app.listen(3000);
}
bootstrap();
