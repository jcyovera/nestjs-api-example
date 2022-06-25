import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interfaces';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService:ItemsService){}

    @Get()
    findAll(): Promise<Item[]>{
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item>{
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item>{
        return this.itemService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        return this.itemService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id){
        return this.itemService.update(id,updateItemDto);
    }

}
