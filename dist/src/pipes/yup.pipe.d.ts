import { PipeTransform } from '@nestjs/common';
import { AnyObjectSchema } from 'yup';
export declare function partial(objectSchema: any): any;
export declare class YupValidationPipe implements PipeTransform {
    private schema;
    constructor(schema: AnyObjectSchema);
    transform(value: any): any;
}
