import { Products } from "../../pages/user-products/types";

export type CardPropsAdmin = {
  name: string;
  img: string;
  manufacturer: string;
  price: number;
  id: string;
  setMyProducts: React.Dispatch<React.SetStateAction<Products[]>>;
};
