export default interface User {
  uid: string,
  email: string;
  provider: 'firebase' | 'facebook' | 'google';
  createdAt?: Date | any;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  mobile?: string;
  phone?: string;
  emailVerified?: boolean;
}