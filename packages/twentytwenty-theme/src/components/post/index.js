import { loadable } from "silea";
/**
 * Codesplit the post component so it's not included if the users
 * load a post directly.
 */
export default loadable(() => import("./post"));
