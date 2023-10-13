import { useParams } from 'next/navigation';

export const useCurrentLanguage = () => {
  const params = useParams();
  const lang = params.lng;

  return lang;
};
