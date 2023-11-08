import { get } from '@/utils/get';

export const group = <T>(arr: T[], key: string | string[]) => {
  return arr.reduce((acc, curr) => {
    const groupKey = Array.isArray(key)
      ? key.map((k) => get(curr, k)).join('_')
      : get(curr, key);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(curr);
    return acc;
  }, {} as Record<string, T[]>);
};
