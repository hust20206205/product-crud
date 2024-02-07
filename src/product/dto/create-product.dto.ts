import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Tên của sản phẩm',
    example: 'Quả dưa hấu',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
