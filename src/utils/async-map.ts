export const asyncMap = async <T, R>(
  values: T[],
  callback: (_v?: T, _i?: number) => Promise<R>
): Promise<R[]> => {
  const result = await Promise.all(values.map(callback));
  return result;
};
