import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import cn from 'classnames';
import styled from 'styled-components';

function ArrowToggle({ className, open }) {
  return <Container className={cn({ open }, className)}><KeyboardArrowDownIcon /></Container>;
}

const Container = styled.span`
  display: flex;
  align-items: center;
  &.open {
    transform: rotate(180deg);
  }

`;

export default ArrowToggle;
