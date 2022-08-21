import React, { memo } from 'react';
import Star from './Star';
import Popper, { PopperProps } from './Popper';

export interface StarsProps extends Omit<PopperProps, 'renderItem'> {}

function Stars(props: StarsProps) {
  return (
    <Popper
      renderItem={({ x, y, colors }, index) => (
        <Star key={index} x={x} y={y} color={colors[index]} />
      )}
      {...props}
    />
  );
}

export default memo(Stars);
