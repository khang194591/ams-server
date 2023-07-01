import { Module } from '@nestjs/common';
import { RoleModule } from './app/role/role.module';
import { UserModule } from './app/user/user.module';
import { AppConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './app/auth/auth.module';
import { CommonModule } from './app/common/common.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    UserModule,
    RoleModule,
    AuthModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
