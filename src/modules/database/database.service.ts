import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as util from 'util';

function getExtendedClient() {
  const client = () =>
    new PrismaClient().$extends({
      query: {
        $allModels: {
          async $allOperations({ operation, model, args, query }) {
            const start = performance.now();
            const result = await query(args);
            const end = performance.now();
            const time = end - start;
            console.log(
              util.inspect(
                `${operation} on ${model} table take ${time} milliseconds`,
              ),
            );
            return result;
          },
        },
        user: {
          $allOperations({ args, query, operation }) {
            if (
              operation !== 'findUnique' &&
              operation !== 'create' &&
              operation !== 'createMany'
            ) {
              args.where.administrator = false;
            }
            return query(args);
          },
        },
      },
      result: {
        user: {
          fullName: {
            needs: { firstName: true, lastName: true },
            compute(user) {
              return [user.lastName, user.firstName].join(' ');
            },
          },
        },
      },
    });

  return class {
    // wrapper with type-safety 🎉
    constructor() {
      return client();
    }
  } as new () => ReturnType<typeof client>;
}

@Injectable()
export class DatabaseService extends getExtendedClient() {}
