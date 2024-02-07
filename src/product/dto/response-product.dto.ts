import { ApiProperty } from '@nestjs/swagger';

import * as faker from 'faker';

export class ResponseProductDto {
  @ApiProperty({
    description: 'Định danh của sản phẩm',
    example: faker.datatype.uuid(),
  })
  productId: string;

  @ApiProperty({
    description: 'Tên của sản phẩm',
    example: faker.commerce.productName(),
  })
  name: string;

  @ApiProperty({
    description: 'Ngày tạo sản phẩm',
    example: faker.date.past(),
  })
  createdAt: Date;
}
