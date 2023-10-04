'use client';

import { Button, Flex, Switch } from '@radix-ui/themes';
import { toast } from 'sonner';

import { useThemeContext } from '@/providers/ThemeProvider';

export default function Home() {
  const { theme, setTheme } = useThemeContext();

  const makeAToast = () =>
    toast('Here you go', {
      description: 'This is a toast',
    });

  return (
    <Flex>
      <Button onClick={makeAToast}>Make a toast</Button>
      <Flex>
        Dark
        <Switch
          defaultChecked={theme === 'light'}
          onCheckedChange={(_c) => setTheme(_c ? 'light' : 'dark')}
        />
        Light
      </Flex>
    </Flex>
  );
}
