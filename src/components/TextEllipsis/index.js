import { useRef, useState } from 'react';

import cn from 'classnames';
import styled from 'styled-components';

function TextEllipsis({ children, textColor, height, lineHeight, className }) {
  const refName = useRef();
  const refTooltip = useRef();
  const refTooltipText = useRef();
  const refEllipsis = useRef();
  const [tooltipDisplay, setTooltipDisplay] = useState(false);
  const [tooltipAnimation, setTooltipAnimation] = useState('hide');
  const [pointerY, setPointerY] = useState(0);

  return (
    <Ellipsis style={{ height }} ref={refEllipsis} className={className}>
      {tooltipDisplay && (
        <Tooltip
          ref={refTooltip}
          className={cn('Tooltip', tooltipAnimation)}
          style={{ top: `${pointerY}px` }}
        >
          <span ref={refTooltipText}>{children}</span>
        </Tooltip>
      )}
      <EllipsisName
        style={{ color: textColor, lineHeight }}
        ref={refName}

      >
        {children}
      </EllipsisName>
    </Ellipsis>
  );
}
const Ellipsis = styled.div`
  display: block;
  color: var(--color-gray-700);
`;
const EllipsisName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100%;
`;
const Tooltip = styled.div`
  position: fixed;
  border-radius: 4px;
  line-height: 16px;
  padding: 9px 12px 8px;
  white-space: nowrap;
  border: var(--border-default);
  box-shadow: 0px 2px 6px 0px #0000000d;
  background-color: #fff;
  color: var(--color-gray-700);
  font-weight: normal;
  opacity: 1;
  z-index: 9999;
  min-width: max-content;
  width: auto !important;
  &.show {
    opacity: 1;
    transition: all 0.25s ease-out;
  }
  &.hide {
    opacity: 0;
    transition: none;
  }
`;

export default TextEllipsis;
