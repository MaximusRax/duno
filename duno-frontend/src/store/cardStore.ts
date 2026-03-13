import { create } from "zustand";
import type { Card } from "./types";

interface CardStore {
  card: Card | null;
  putCard: (nextCard: Card) => { success: boolean; error?: string };
}

const useCard = create<CardStore>((set, get) => ({
  card: null, 
  putCard: (nextCard: Card) => {
    const currentCard = get().card; 

    const isValid = isValidCard(nextCard, currentCard);
    if (!isValid) {
      // TODO: Emit server Invalid Event
      return { success: false, error: "Invalid Card" };
    }

    set({ card: nextCard });
    // TODO: Emit server success Event
    return { success: true };

  },
}));

const isValidCard = (card: Card, currentCard: Card | null): boolean => {
  if (!currentCard) {
    return true;
  }
  if (card.isPowerCard && card.powerCardType?.includes("wild")) {
    return true;
  }

  if (currentCard.color === card.color || currentCard.no === card.no) {
    return true;
  }

  if (currentCard.isPowerCard && currentCard.powerCardType?.includes("wild")) {
    return true;
  }

  return false;
  // TODO add server update event
};

export default useCard;
