export type TLoading = "idle" | "pending" | "succeeded" | "failed";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
  rating?: { rate: number; count: number };
}
