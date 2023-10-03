import {
  PropsWithChildren,
  ReactElement,
  SVGProps,
  cloneElement,
  isValidElement,
} from 'react';
import { useIsClient } from 'usehooks-ts';

type SvgIconProps = SVGProps<SVGSVGElement> & PropsWithChildren;

export const SvgIcon = ({
  children,
  viewBox = '0 0 24 24',
  width = 24,
  height = 24,
  ...other
}: SvgIconProps) => {
  const isMounted = useIsClient();

  if (isValidElement(children)) {
    const clonedChildren = cloneElement<SVGProps<SVGSVGElement>>(
      children as ReactElement,
      { ...other, viewBox, width, height }
    );
    return isMounted && clonedChildren;
  } else {
    throw new Error('SvgIcon component should contain only svg child');
  }
};
