import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UtilsModule } from '@/utils/utils.module';

@Module({
  // imports: [UtilsModule],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
