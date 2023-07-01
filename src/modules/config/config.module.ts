import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { object, string } from 'yup';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate(config: Record<string, unknown>) {
        const envSchema = object({
          PORT: string().required(),
          DOCS_PATH: string().required(),
          BASE_PATH: string().required(),
          CLIENT_BASE_URL: string().required(),
          COOKIE_AGE: string().required(),
          TOKEN_SECRET: string().required(),
        });
        try {
          const result = envSchema.validateSync(config);
          return result;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
})
export class AppConfigModule {}
