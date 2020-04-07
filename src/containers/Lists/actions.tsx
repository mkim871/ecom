import listsConstants from './constants';
import listService from '../../_services/list.service';

export const updateList = (lists:any) => ({
  type: listsConstants.UPDATED,
  lists
})

export const getLists = () => {
  return async (dispatch:any) => {
    const lists = await listService.getLists();
    dispatch(updateList(lists));
  }
}