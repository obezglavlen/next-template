import Negotiator from 'negotiator';

export const availableLanguages = ['en', 'ua'];

export const getLocale = (request: Request) => {
  const _headers = request.headers;
  return new Negotiator({
    headers: _headers as unknown as Negotiator.Headers,
  }).language(availableLanguages);
};
