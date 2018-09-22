import * as React from 'react';

export interface HideFromScreenReadersProps {
  inline?: boolean;
}

const HideFromScreenReaders: React.SFC<HideFromScreenReadersProps> = ({ children, inline }) => {
  const Element = inline ? 'span' : 'div';

  return <Element aria-hidden>{children}</Element>;
};

export default HideFromScreenReaders;
