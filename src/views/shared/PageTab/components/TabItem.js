import cn from 'classnames';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

import TextEllipsis from '../../../../components/TextEllipsis';

function TabItem({ id, name, selectPage, closePage, activePageId }) {
  return (
    <TabView
      key={id}
      className={cn({
        isActiveTab: id === activePageId,
        mainTab: id === 'main',
      })}
    >
      <Name onClick={() => selectPage(id)}>
        <TextEllipsis height="100%" lineHeight="40px">
          {name}
        </TextEllipsis>
      </Name>
      {id === 'main' ? (
        false
      ) : (
        <ButtonClose onClick={() => closePage(id)}>
          <CloseIcon className="svgCloseX" />
        </ButtonClose>
      )}
    </TabView>
  );
}

const TabView = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  font-size: 12px;
  flex-basis: fit-content;
  cursor: pointer;
  background: var(--color-gray-200);
  min-width: 20px;
  padding-right: 36px;
  align-items: center;
  &.mainTab {
    padding-right: 15px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  .svgCloseX {
    width: 16px;
    height: 16px;
    fill: var(--color-gray-500);
  }
  &.isActiveTab {
    background: #fff;
    flex-shrink: 0;
    flex-basis: fit-content !important;
    .name {
      color: #111;
      font-weight: 600;
    }
    .svgCloseX {
      width: 16px;
      height: 16px;
      fill: #111;
    }
    .Tooltip {
      display: none;
    }
  }
  &:last-child {
    .Tooltip {
      left: auto;
      right: 2px;
    }
  }
`;

const Name = styled.a`
  flex: 0 1 min-content;
  min-width: 10px;
  width: auto;
  display: block;
  padding-left: 15px;
  height: 100%;
  color: var(--color-gray-500);
`;

const ButtonClose = styled.div`
  position: absolute;
  right: 9px;
  padding: 1px;
  top: 50%;
  margin-top: -9px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  &:hover,
  &:focus {
    background-color: var(--color-gray-200);
  }
`;

export default TabItem;
