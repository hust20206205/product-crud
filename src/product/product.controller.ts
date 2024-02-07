import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ResponseProductDto } from './dto/response-product.dto';

import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

 


  
  @Post()
  @ApiOperation({ summary: 'Create a new Product' })
  @ApiResponse({ status: 201, type: ResponseProductDto })
  @ApiBody({ type: CreateProductDto })
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productService.create(createProductDto);
  }




  @Get()
  @ApiOperation({ summary: 'Get all Products' })
  @ApiResponse({ status: 200, type: [ResponseProductDto] })
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Product by id' })
  @ApiResponse({ status: 200, type: ResponseProductDto })
  @ApiParam({ name: 'id', required: true })
  async findOne(@Param('id') id: string): Promise<Product> {
    return await this.productService.findOne(id);
  }
  




  @Put(':id')
  @ApiOperation({ summary: 'Update a Product by id' })
  @ApiResponse({ status: 200, type: ResponseProductDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBody({ type: UpdateProductDto })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productService.update(id, updateProductDto);
  }






  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Product by id' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', required: true })
  async remove(@Param('id') id: string): Promise<void> {
    return await this.productService.remove(id);
  }
}
