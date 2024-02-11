import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import * as faker from 'faker';

export class UpdateProductDto {
  @ApiProperty({
    description: 'Tên của sản phẩm',
    example: faker.commerce.productName(),
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  name?: string;
}
