import { Effect } from "./Effect";

export interface Effects {
    primary: Effect,
    secondary: Effect[],
}