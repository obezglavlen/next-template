'use client';

import { toast } from 'react-toastify';

import { Button } from '@/components/common/Button';
import { Grid } from '@/components/common/Grid';

export const Temp = () => {
  const onClick = () => {
    toast('Yo mama gay');
  };

  return (
    <Grid.Root col={2} row={4} className='text-black'>
      <Grid.Item colSpan={2} className='bg-green-100'>
        Hello
      </Grid.Item>
      <Grid.Item rowSpan={3} className='bg-yellow-100'>
        World
      </Grid.Item>
      <Grid.Item rowSpan={3} className='bg-blue-100'>
        <Button.Default type='button' onClick={onClick}>
          Тин дин тин дин
        </Button.Default>
      </Grid.Item>
    </Grid.Root>
  );
};
