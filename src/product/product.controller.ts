import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';





import { Product } from './entities/product.entity';
import { ProductService } from './product.service';



import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ResponseProductDto } from './dto/response-product.dto';




import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';



@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Products' })
  @ApiResponse({ status: 200, type: [ResponseProductDto] })
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
 

//   @Get(':id')
//   @ApiOperation({ summary: 'Get a notification by id' })
//   @ApiResponse({ status: 200, type: ResponseNotificationDto })
//   @ApiParam({ name: 'id', required: true })
//   async findOne(@Param('id') id: string): Promise<Notification> {
//     return await this.notificationService.findOne(id);
//   }

//   @Delete(':id')
//   @ApiOperation({ summary: 'Delete a notification by id' })
//   @ApiResponse({ status: 200 })
//   @ApiParam({ name: 'id', required: true })
//   async remove(@Param('id') id: string): Promise<void> {
//     return await this.notificationService.remove(id);
//   }

//   @Post()
//   @ApiOperation({ summary: 'Create a new notification' })
//   @ApiResponse({ status: 201, type: ResponseNotificationDto })
//   @ApiBody({ type: CreateNotificationDto })
//   async create(
//     @Body() createNotificationDto: CreateNotificationDto,
//   ): Promise<Notification> {
//     return await this.notificationService.create(createNotificationDto);
//   }

//   @Put(':id')
//   @ApiOperation({ summary: 'Update a notification by id' })
//   @ApiResponse({ status: 200, type: ResponseNotificationDto })
//   @ApiParam({ name: 'id', required: true })
//   @ApiBody({ type: UpdateNotificationDto })
//   async update(
//     @Param('id') id: string,
//     @Body() updateNotificationDto: UpdateNotificationDto,
//   ): Promise<Notification> {
//     return await this.notificationService.update(id, updateNotificationDto);
//   }
// }
