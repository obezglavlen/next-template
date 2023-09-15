export const get = (obj: any, path: string): any => {
  return path.split('.').reduce((acc, curr) => {
    return acc ? acc[curr] : undefined;
  }, obj);
};