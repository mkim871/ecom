import { db, auth, timestamp } from "../firebase";
import { Item } from "../_models/item";
import _ from "lodash";

const listService = {
  add: (uid: string, item: Item) => {
    return new Promise(async (resolve, reject) => {
      try {
        const wishlist = { ...item };
        wishlist.createdAt = timestamp;
        await db
          .collection("users")
          .doc(uid)
          .update({
            [`wishlist.` + wishlist.id]: wishlist,
          });
        resolve(wishlist);
      } catch (error) {
        reject(error);
      }
    });
  },

  getLatest: (wishlist: any) => {
    const call = (id: string) => {
      return new Promise(async (resolve, reject) => {
        const item = await db.collection("lists").doc(id).get();
        resolve(item.data());
      });
    };
    const wishlistArray = _.values(wishlist);

    let promises = [];
    for (var i = 0; i < wishlistArray.length; i++) {
      promises.push(call(wishlistArray[i].id));
    }
    return Promise.all(promises);
  },
};

export default listService;
