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
    <Grid.Root col={2} row={4} className='text-black'>
      <Grid.Item colSpan={2} className='bg-green-100'>
        Hello
      </Grid.Item>
      <Grid.Item rowSpan={3} className='bg-yellow-100'>
        World
      </Grid.Item>
      <Grid.Item rowSpan={3} className='bg-blue-500'>
        <Flex direction='col'>
          <Button.Default type='button' onClick={handleClick}>
            Тин дин тин дин
          </Button.Default>
          <Button.Outlined type='button' onClick={handleClick}>
            Тин дин тин дин
          </Button.Outlined>
          <Button.Filled type='button' onClick={handleClick}>
            Тин дин тин дин
          </Button.Filled>
        </Flex>
      </Grid.Item>
    </Grid.Root>
  );
};
