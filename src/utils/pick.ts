export const pick = (obj: any, key: string | string[]) => {
  const newObj = { ...obj };
  if (Array.isArray(key)) {
    const pickedObj = {} as typeof obj;
    key.forEach((k) => {
      pickedObj[k] = newObj[k];
    });
    return pickedObj;
  } else {
    return newObj[key];
  }
};
