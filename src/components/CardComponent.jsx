import React from 'react'
import { useState } from 'react';



function SingleCard(props) {


  const [isFlipping, setIsFlipping] = useState(false);

  function handleClick() {
    if (!isFlipping) {
      setIsFlipping(true);
      if (!props.disabled) {
        props.handleChoice(props.card);
      }
    }
  }
  
  
  setTimeout(() => {
    setIsFlipping(false);
  }, 200);
  

  return (
    <div>
      <div className="card">
        <div className={props.flipped ? "flipped" : ""}>
          <img
            className="front"
            src={props.card.src}
            alt="img front"
            
          ></img>
          <img
            className="back"
            src="/digimon png/back.jpg"
            alt="img back"
            onClick={handleClick}
            
          ></img>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;