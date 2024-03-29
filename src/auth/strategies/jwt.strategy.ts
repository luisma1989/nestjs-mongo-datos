import { Inject, Injectable } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';

import { Strategy, ExtractJwt } from 'passport-jwt';

import config from 'src/config';
import { ConfigType } from '@nestjs/config';
import { PayloadToken } from 'src/auth/models/token.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwt.secret,
    });
  }

  validate(payload: PayloadToken) {
    return payload;
  }
}
