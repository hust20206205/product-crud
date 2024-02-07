import { ApiProperty } from '@nestjs/swagger';

export class ResponseProductDto {
  @ApiProperty({
    description: 'Định danh của sản phẩm',
    example: '5aadea75-8541-4f48-abfa-929b81a4308c',
  })
  productId: string;

  @ApiProperty({
    description: 'Tên của sản phẩm',
    example: 'Quả dưa hấu',
  })
  name: string;

  @ApiProperty({
    description: 'Ngày tạo sản phẩm',
    example: '2022-01-01T00:00:00Z',
  })
  createdAt: Date;
}
