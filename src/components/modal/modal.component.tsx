import { FunctionComponent, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const Modal: FunctionComponent<PropsWithChildren<Props>> = ({
  className,
  children,
  open,
}) => {
  if (!open) return null;

  return (
    <>
      {createPortal(<div className={className}>{children}</div>, document.body)}
    </>
  );
};

export default Modal;

interface Props {
  className?: string;
  open: boolean;
}
