import { Product } from '../product/model/product.model';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export function addProductReducer(state: Product[] = [], action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      const storeArray = [...state];
      let index = 0;
      storeArray.forEach((item, ind) => {
        if (item.id === action.payload.id) {
          index = ind;
        }
      });
      console.log('index:', index);
      storeArray.splice(index, 1);
      return storeArray;
    default:
      return state;
  }
}
