import { ActivityHistory } from './activity-history.ts';
import { ProductCard } from './product-card.ts';
import { User } from './user.ts';

export type Platform = {
  title: string;
  date: string;
  description: string;
  goals: string[];
  products: ProductCard[]
  history: ActivityHistory[];
  employees: User[];
}
