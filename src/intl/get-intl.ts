export const getIntl = (lang: string) => {
  return import(`/public/intl/${lang}.json`).then((mod) => mod.default);
};
