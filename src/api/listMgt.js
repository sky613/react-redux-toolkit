import { listMgt } from './mock/listMgt';

const ListMgt = ({ http }) => ({
  getListMgt: ({ params, config }) => new Promise((resolve) => {
    setTimeout(() => resolve(listMgt), 1000);
  }),

});

export default ListMgt;
