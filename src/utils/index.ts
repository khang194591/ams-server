import { sign } from 'jsonwebtoken';
import { EnvKey } from '../constants/config';
import { BaseQueryString, SortOrder } from '../interfaces/base.dto';

// Parse query params to prisma query object
export function parseQueryString(queryParams: BaseQueryString) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { keyword, sortBy, sortOrder, take, page, ...filter } = queryParams;

  const skip = page ? (page - 1) * take : undefined;

  const orderBy =
    sortBy && sortOrder
      ? { [sortBy]: sortOrder }
      : { createdAt: 'desc' as SortOrder };

  const where = {};
  for (const queryKey of Object.keys(filter)) {
    where[queryKey] = { in: filter[queryKey].map((item) => item) };
  }

  return { orderBy, where, take, skip };
}

// Check if current user have required permissions
export function checkPermissions(
  userId: number,
  userPermissions: string[],
  permission: string,
  id: number | string,
) {
  return userPermissions.includes(permission) || userId === +id;
}

export function signJWT(data: any) {
  return sign(data, process.env[EnvKey.TOKEN_SECRET], {
    expiresIn: Number(process.env[EnvKey.COOKIE_AGE]),
  });
}

export function random_bm(max: number) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return random_bm(max); // resample between 0 and 1

  return Math.round(num * max);
}

export function removeAccents(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}
