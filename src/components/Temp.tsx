'use client';

import { Button } from '@/components/common/Button';
import { Grid } from '@/components/common/Grid';

export const Temp = () => {
  return (
    <Grid.Root col={2} row={4} className='text-black'>
      <Grid.Item colSpan={2} className='bg-green-100'>
        Hello
      </Grid.Item>
      <Grid.Item rowSpan={3} className='bg-yellow-100'>
        World
      </Grid.Item>
      <Grid.Item rowSpan={3} className='bg-blue-100'>
        <Button.Default type='button'>Тин дин тин дин</Button.Default>
      </Grid.Item>
    </Grid.Root>
  );
};
