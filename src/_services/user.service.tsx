import {db, auth, timestamp} from '../firebase';
import User from '../_models/user';

const userService = {
  createUser: (email:string, password:string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const credential = await auth.createUserWithEmailAndPassword(email, password);
        if (credential !== null && credential.user !== null) {
          const newUser: User = {
            uid: credential.user.uid,
            email: credential.user.email!,
            provider: 'firebase',
            createdAt: timestamp,
            emailVerified: false
          }
          await db.collection('users').doc(credential.user.uid).set(newUser);
          resolve(newUser);
        } else {
          reject ("Credential is null");
        }
      } catch (error) {
        reject(error);
      }
    })
  },

  signin: (email:string, password:string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const credential = await auth.signInWithEmailAndPassword(email, password);
        if (credential !== null && credential.user !== null) {
          const user = await db.collection('users').doc(credential.user.uid).get();
          resolve(user.data());
        } else {
          reject ("Credential is null");
        }
      } catch (error) {
        reject(error);
      }
    })
  },

  getUserDetail: (uid:string) => {
    return new Promise(async (resolve, reject) => {
      const user = await db.collection('users').doc(uid).get();
      resolve(user.data());
    });
  }
}

export default userService;