import { FC, PropsWithChildren } from 'react';
import styles from './page.module.css';

const Template: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Template;
