import itemConstants from "./constants";
import { history } from "../../_helpers/history";
import userService from "../../_services/user.service";
import listService from "../../_services/list.service";

export const currentItem = (item: any) => {
  return {
    type: itemConstants.CURRENT,
    item,
  };
};

export const getCurrentItem = (id: string) => {
  return async (dispatch: any) => {
    try {
      const item = await listService.getItem(id);
      dispatch(currentItem(item));
    } catch (error) {
      
    }
  };
};
