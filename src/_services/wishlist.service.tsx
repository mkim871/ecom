import { db, auth, timestamp } from "../firebase";
import { Item } from "../_models/item";

const listService = {
  add: (uid: string, item: Item) => {
    return new Promise(async (resolve, reject) => {
      try {
        await db
          .collection("users")
          .doc(uid)
          .update({
            [(`wishlist.` + item.id)]: item,
          });
        resolve(item);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default listService;
