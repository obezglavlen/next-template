import { FC, PropsWithChildren } from "react";

const Template: FC<PropsWithChildren> = ({children}) => {
  return <div style={{color: 'red'}}>{children}</div>
}

export default Template;