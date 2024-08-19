import { User } from './user.ts';

export type ActivityHistory = {
  id: string;
  title: string;
  author: Pick<User, 'first_name' | 'last_name' | 'image'>;
  timestamp: string;
}
