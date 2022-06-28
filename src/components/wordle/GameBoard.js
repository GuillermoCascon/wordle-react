import React from "react";
import { Link } from "react-router-dom";
import { GameBox } from "./GameBox";


export function GameBoard(props) {
    const {board} = props;
    console.log(board);
  return (
    <div className='gameboard-container'>
        {board.map((row)=>{
            return (
                <div className='game-row'>
                    {row.gamebox.map((gamebox)=>{
                        return (
                            <div className='gamebox'>{gamebox.value}</div>
                        )
                    })}
                </div>
            )
        })}
        
    </div>
  );
}