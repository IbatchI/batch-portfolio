import { useReducer } from "react";

type GameState = "boot" | "title" | "game";

type Action =
  | { type: "BOOT_COMPLETE" }
  | { type: "START" }
  | { type: "BACK" };

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "BOOT_COMPLETE":
      return "title";
    case "START":
      return "game";
    case "BACK":
      return "title";
  }
}

export function useGameState() {
  const [gameState, dispatch] = useReducer(reducer, "boot");

  return {
    gameState,
    actions: {
      bootComplete: () => dispatch({ type: "BOOT_COMPLETE" }),
      start: () => dispatch({ type: "START" }),
      back: () => dispatch({ type: "BACK" }),
    },
  };
}
