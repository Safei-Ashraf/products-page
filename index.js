import { products } from "./scripts/productsData.js";
import { render } from "./scripts/Product/index.js";
import { stateManager } from "./scripts/local.js";

export const state = stateManager(products);
render(state);







