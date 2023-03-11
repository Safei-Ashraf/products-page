import { products } from "./scripts/productsData.js";
import { render } from "./scripts/Product/index.js";
import { handleState } from "./scripts/local.js";

export const state = handleState(products);
render(state);
