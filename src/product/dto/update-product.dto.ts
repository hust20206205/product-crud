import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    description: 'Tên của sản phẩm',
    example: 'Quả dưa hấu Update',
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  name?: string;
}
