import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import * as faker from 'faker';

export class CreateProductDto {
  @ApiProperty({
    description: 'Tên của sản phẩm',
    example: faker.commerce.productName(),
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
