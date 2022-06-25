import { CreateItemDto } from './dto/create-item.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/item.schemas';

@Injectable()
export class ItemsService {

    constructor(@InjectModel(Item.name) private itemModel:Model<ItemDocument>){}

    async findAll(): Promise<Item[]>{
        return await this.itemModel.find().exec();
    }

    async findOne(id:string): Promise<Item>{
        return await this.itemModel.findOne({_id:id}).exec();
    }

    async create(item: CreateItemDto):Promise<Item>{
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id:string):Promise<Item>{
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id:string, item:Item):Promise<Item>{
        return await this.itemModel.findByIdAndUpdate(id, item,{ new:true});
    }

}
