'use client';

import { toast } from 'react-toastify';

import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';
import { Grid } from '@/components/common/Grid';

import { onClick } from '@/services/temp';

export const Temp = () => {
  const handleClick = () => {
    toast('Yo mama gay');
    onClick();
  };

  return (
    <Grid.Root
      col={2}
      row={4}
      className='text-black ring-4 ring-secondary dark:ring-primary'
    >
      <Grid.Item className='bg-secondary dark:bg-primary'></Grid.Item>
      <Grid.Item className='bg-transparent'></Grid.Item>
      <Grid.Item className='bg-accent-light-sea-green'></Grid.Item>
      <Grid.Item className='bg-accent-lavender-floral'></Grid.Item>
      <Grid.Item rowSpan={2}>
        <Flex direction='col'>
          <Button.Default type='button' onClick={handleClick}>
            Тин дин тин дин
          </Button.Default>
          <Button.Outlined type='button' onClick={handleClick}>
            Тин дин тин дин
          </Button.Outlined>
        </Flex>
      </Grid.Item>
      <Grid.Item rowSpan={2}>
        <Flex direction='col'>
          <Button.Outlined type='button' onClick={handleClick}>
            Тин дин тин дин
          </Button.Outlined>
          <Button.Default type='button' onClick={handleClick}>
            Тин дин тин дин
          </Button.Default>
        </Flex>
      </Grid.Item>
    </Grid.Root>
  );
};
