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
            createdAt: timestamp
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
  }
}

export default userService;