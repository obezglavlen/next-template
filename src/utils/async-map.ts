import { slice } from './slice';

export const asyncMap = async <T, R>(
  values: T[],
  callback: ($v?: T, $i?: number) => Promise<R>,
  size?: number
): Promise<R[]> => {
  let result: R[] = [];
  if (size) {
    for (const chunk of slice(values, size)) {
      result = result.concat(await Promise.all(chunk.map(callback)));
    }
  } else {
    result = await Promise.all(values.map(callback));
  }

  return result;
};
