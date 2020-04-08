import {db, auth, timestamp} from '../firebase';
import {Item} from '../_models/item';

const listService = {
  getLists: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const snapshot = await db.collection('lists').get();
        resolve(snapshot.docs.map(doc => doc.data()));
      } catch (error) {
        reject(error);
      }
    });
  },

  createItem: (item: Item) => {
    return new Promise(async (resolve, reject) => {
      try {
        const id = await db.collection('lists').doc().id;
        item.createdAt = timestamp;
        item.id = id;
        await db.collection('lists').doc(id).set(item);
        resolve(item);
      } catch (error) {
        reject(error);
      }
    });
    // Random items
    // _.forEach(_.fill(Array(20), 0), async (item: any) => {
    //   await listService.createItem({
    //     brand: _.sample(['Rolex', 'Omega', 'Piaget', 'DW', 'Cartier']) as string,
    //     model: _.sample(['Marie Antoinette', 'Amfibia', 'Ruputer', 'Chanel J12']) as string,
    //     year: _.sample([1990, 2000, 2011, 2020, 1981]) as number,
    //     price: _.sample([12000, 3000, 9000, 50000, 60000]) as number,
    //   });
    // })
  },

  getItem: (id: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await db.collection('lists').doc(id).get();
        resolve(res.data());
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default listService;