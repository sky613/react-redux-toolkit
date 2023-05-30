import styled from 'styled-components';

function Button({
  children,
  className,
  size,
  type,
  width,
  height,
  onClick,
  htmlType,
  style,
  disabled,
  buttonRef,
}) {
  return (
    <ButtonStyled
      className={className}
      size={size}
      ref={buttonRef}
      width={width}
      height={height}
      viewType={type}
      onClick={onClick}
      type={htmlType}
      style={style}
      disabled={disabled && disabled}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: var(--border-default);
  background-color: var(--color-white);
  color: var(--color-gray-700);
  box-shadow: none;
  text-align: center;
  cursor: pointer;
  transition: none;
  font-size: 13px;
  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }
  &:hover:not([disabled]) {
    border: 1px solid var(--color-gray-200);
    background-color: #fff;
    color: var(--color-gray-500);
  }
  &:active:not([disabled]),
  &:focus:not([disabled]) {
    border: 1px solid var(--color-gray-500);
    background-color: var(--color-gray-50);
    color: var(--color-gray-600);
  }
  ${(props) => {
    if (props.size === 'small') {
      return `
        height: 28px;
        line-height: 24px;
        font-size: 12px;
      `;
    }
    return `
      height: 32px;
      line-height: 28px;
      font-size: 13px;
    `;
  }};
 

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  img {
    margin-right: 2px;
    display: block;
  }
`;

export default Button;
