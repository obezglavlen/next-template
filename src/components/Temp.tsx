'use client';

import { toast } from 'react-toastify';

import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';
import { Grid } from '@/components/common/Grid';
import { SvgIcon } from '@/components/common/SvgIcon';

import { onClick } from '@/services/temp';

import { LeftIcon } from '@/icons/feather/LeftIcon';
import { RightIcon } from '@/icons/feather/RightIcon';

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
            <SvgIcon width={20} height={20}>
              <LeftIcon />
            </SvgIcon>
            Тин дин тин дин
            <SvgIcon width={20} height={20}>
              <RightIcon />
            </SvgIcon>
          </Button.Filled>
        </Flex>
      </Grid.Item>
    </Grid.Root>
  );
};
