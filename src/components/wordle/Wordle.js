import React from "react";
import { GameBoard } from "./GameBoard";
import { Keyboard } from "./Keyboard";
import { board4,board5,board6 } from "./Boards";
import useLocalStorage from 'use-local-storage'

export function Wordle() {
  const [board, setBoard] = React.useState(board4);
  const [userConfigLS, setUserConfigLS] = useLocalStorage('userConfig');

  React.useEffect(()=>{
    console.log(userConfigLS);
    switch (userConfigLS.size) {
      case '4':
        console.log('cuatro');
        setBoard(board4);
        break;
      case '5':
        console.log('sin');
        setBoard(board5);
        break;
      case '6':
        console.log('sei');
        setBoard(board6);
        break;

    }
  },[])
  return (
    <div className='wordle-container'>
        <GameBoard
          board = {board}
        />
        <Keyboard
          hasSpanishN = {true}
          parentCallback = {userClicks}
        />
    </div>
  );

  function userClicks (evt){
    let keyPressed = evt.target.textContent;
    switch (keyPressed) {
      case '←':
        //eliminar el primer valor presente
        deleteLetterFromBoard();
        break;
      case '↲':
        //comprobar fila
        checkWin();
        break;
    
      default:
        //anadir teclaPulsada a tablero (value)
        addLetterToBoard();
        break;
    }
  }
  function deleteLetterFromBoard(){
    board4.forEach(row => {
      row.gamebox.forEach(gamebox => {
        
      });
    });
  }
  function checkWin(){}
  function addLetterToBoard(){}
}