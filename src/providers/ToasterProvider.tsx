import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';

export const ToasterProvider = () => {
  const { theme } = useTheme();
  return <Toaster closeButton richColors theme={theme as any} />;
};
