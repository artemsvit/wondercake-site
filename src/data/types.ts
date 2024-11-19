export type DessertCategory =
  | 'Cakes'
  | 'Pies'
  | 'Cookies'
  | 'Pastries'
  | 'Custards'
  | 'Chocolates'
  | 'Brownies'
  | 'Cheesecakes';

export interface Dessert {
  id: number;
  name: string;
  slug: string;
  category: DessertCategory;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    sugar: number;
  };
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
