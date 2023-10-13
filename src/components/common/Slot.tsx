import {
  PropsWithChildren,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';

export const Slot = forwardRef(
  ({ children, ...other }: PropsWithChildren, ref) => {
    if (!isValidElement(children)) {
      return null;
    }

    return cloneElement(children, { ...other, ...children.props, ref });
  }
);
