import React from "react";
import { Link } from "react-router-dom";
export function Keyboard(props) {

  const {parentCallback, hasSpanishN} = props;

  React.useEffect(()=>{
    document.querySelector('.keyboard').addEventListener('click', handleClick)
  },[])

  function handleClick(evt){
    parentCallback(evt)
  }
  return (
    
    <div className='keyboard'>
        <div className='keyboard-row'>
            <div className='keyboard-key'>Q</div>
            <div className='keyboard-key'>W</div>
            <div className='keyboard-key'>E</div>
            <div className='keyboard-key'>R</div>
            <div className='keyboard-key'>T</div>
            <div className='keyboard-key'>Y</div>
            <div className='keyboard-key'>U</div>
            <div className='keyboard-key'>I</div>
            <div className='keyboard-key'>O</div>
            <div className='keyboard-key'>P</div>
        </div>
        <div className='keyboard-row'>
            <div className='keyboard-key'>A</div>
            <div className='keyboard-key'>S</div>
            <div className='keyboard-key'>D</div>
            <div className='keyboard-key'>F</div>
            <div className='keyboard-key'>G</div>
            <div className='keyboard-key'>H</div>
            <div className='keyboard-key'>J</div>
            <div className='keyboard-key'>K</div>
            <div className='keyboard-key'>L</div>
            
            {hasSpanishN ? <div className='keyboard-key'>Ñ</div> : ''}
        </div>
        <div className='keyboard-row'>
            <div className='keyboard-key keyboard-key-delete'>←</div>
            <div className='keyboard-key'>Z</div>
            <div className='keyboard-key'>X</div>
            <div className='keyboard-key'>C</div>
            <div className='keyboard-key'>V</div>
            <div className='keyboard-key'>B</div>
            <div className='keyboard-key'>N</div>
            <div className='keyboard-key'>M</div>
            <div className='keyboard-key keyboard-key-enter'>↲</div>
        </div>
    </div>
  );
}


