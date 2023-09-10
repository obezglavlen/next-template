import { Flex } from '@/components/common/Flex';
import { Grid } from '@/components/common/Grid';
import { twMerge } from 'tailwind-merge';

export default function Home() {
  return (
    <Flex
      direction='col'
      className={twMerge(
        `
        items-center
        justify-center
        h-full
        bg-slate-600
        `
      )}
    >
      <Grid.Root col={2} row={4} className='text-black'>
        <Grid.Item colSpan={2} className='bg-green-100'>
          Hello
        </Grid.Item>
        <Grid.Item rowSpan={3} className='bg-yellow-100'>
          World
        </Grid.Item>
        <Grid.Item rowSpan={3} className='bg-blue-100'>
          !
        </Grid.Item>
      </Grid.Root>
    </Flex>
  );
}
