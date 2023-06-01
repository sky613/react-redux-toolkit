import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { getListMgt } from '../redux/slice';

function ListSearchContainer() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.listMgt);
  const btnHandler = () => {
    dispatch(getListMgt({}));
  };
  useEffect(() => {
    console.log('getListMgt', list);
  }, [list]);
  return (
    <>
      <h1>
        ListSearchContainer
      </h1>
      <button onClick={btnHandler}>test</button>
    </>
  );
}
export default ListSearchContainer;
