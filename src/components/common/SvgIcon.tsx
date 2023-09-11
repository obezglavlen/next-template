import {
  PropsWithChildren,
  ReactElement,
  SVGProps,
  cloneElement,
  isValidElement,
} from 'react';
import { useIsClient } from 'usehooks-ts';

import { PropsWithClassName } from '@/types';

type SvgIconProps = SVGProps<SVGSVGElement> &
  PropsWithChildren &
  PropsWithClassName;

export const SvgIcon = ({
  children,
  className,
  viewBox = '0 0 24 24',
  width = 24,
  height = 24,
  ...other
}: SvgIconProps) => {
  const isMounted = useIsClient();

  if (isValidElement(children)) {
    const clonedChildren = cloneElement<SVGProps<SVGSVGElement>>(
      children as ReactElement,
      { ...other, viewBox, width, height, className }
    );
    return isMounted && clonedChildren;
  } else {
    throw new Error('SvgIcon component should contain only svg child');
  }
};
