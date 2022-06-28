import React from "react";
import { Link } from "react-router-dom";
import { Wordle } from "../wordle/Wordle";
export function GamePage() {
  return (
    <div className="game-page-container">
      <Link className="button button-new-game" to="/">New Game</Link>
      <Wordle />
    </div>
  );
}