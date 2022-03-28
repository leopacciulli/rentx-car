export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  fuel_type: string;
  rent: {
    period: string;
    price: number;
  }
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  }[],
  photos: string[];
}