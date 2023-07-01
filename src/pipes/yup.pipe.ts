import { Injectable, PipeTransform } from '@nestjs/common';
import { AnyObjectSchema } from 'yup';

export function partial(objectSchema) {
  const partial: any = {};
  for (const [key, schema] of Object.entries<object>(objectSchema.fields)) {
    partial[key] =
      'optional' in schema && schema.optional instanceof Function
        ? schema.optional()
        : schema;
  }

  objectSchema.fields = partial;

  return objectSchema;
}

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private schema: AnyObjectSchema) {}

  transform(value: any) {
    return this.schema.validateSync(value, { stripUnknown: true });
  }
}
