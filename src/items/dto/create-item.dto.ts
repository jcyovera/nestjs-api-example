import{ IsNotEmpty, IsNumber } from 'class-validator';
export class CreateItemDto{
    @IsNotEmpty()
    readonly name:string;
    readonly description:string;
    @IsNumber()
    readonly qty: number;
}