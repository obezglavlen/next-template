import { ForwardedRef, forwardRef } from 'react';
import SimpleBar, { Props } from 'simplebar-react';

export const ScrollBar = forwardRef((props: Props, ref: ForwardedRef<any>) => {
  return <SimpleBar {...props} ref={ref} />;
});
