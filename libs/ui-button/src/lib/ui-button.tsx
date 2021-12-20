import { ReactNode } from 'react';
import styles from './ui-button.module.css';

/* eslint-disable-next-line */
export interface UiButtonProps {
  children?: ReactNode;
  onClick: () => void;
}

export function UiButton(props: UiButtonProps) {
  return (
    <button onClick={props.onClick} className={styles['button']}>
      {props.children}
    </button>
  );
}

export default UiButton;
