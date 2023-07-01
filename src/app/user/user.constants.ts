export const STATUS = ['active', 'pending', 'inactive'] as const;

export const GENDER = ['male', 'female', 'other'] as const;

export type Status = (typeof STATUS)[number];

export type Gender = (typeof GENDER)[number];
