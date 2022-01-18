import { IsString, IsNotEmpty, IsPhoneNumber, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class Skills {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  color: string;
}

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsArray()
  @IsNotEmpty()
  readonly skills: Skills;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
