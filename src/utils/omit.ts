export const omit = (obj: any, key: string | string[]) => {
  const newObj = { ...obj };
  if (Array.isArray(key)) {
    key.forEach((k) => {
      delete newObj[k];
    });
  } else {
    delete newObj[key];
  }
  return newObj;
}