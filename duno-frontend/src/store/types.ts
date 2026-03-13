import type { PowerCard } from "../components/types";

type cardColor = "yellow" | "green" | "blue" | "red";
export type Card = {
  no: number;
  color: cardColor;
  isPowerCard:boolean,
  powerCardType?:PowerCard,
};
