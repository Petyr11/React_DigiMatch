// V1.0
import React, { useState,useEffect } from "react";
import SingleCard from "./components/CardComponent";


var RDM = "React_DigiMatch"

const cardImages = [
  {
    src: RDM + "/digimon_png/tcgagumon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/tcgange.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM +"/digimon_png/tcgsalamon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/tcgpatamon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/tcggabumon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/tcgelecmon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/BT1-027.jpg",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/BT3-023.jpg",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/BT3-034.jpg",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/BT7-056.jpg",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/BT12-032.jpg",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/P-010.jpg",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/P-078.jpg",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/P-058.jpg",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/tcgjellymon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/tcgmetalgreymon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/canoweissmon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/paildramon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/lillymon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/exveemon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/renamon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/sistermon.webp",
    matched: false,
    flipped: false,
  },
  {
    src: RDM + "/digimon_png/angoramon.webp",
    matched: false,
    flipped: false,
  },
];




function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [pairsMatched, setPairsMatched] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [allFlipped, setAllFlipped] = useState(false);

  

  // embaralhar cartas
  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages].sort(
      () => Math.random() - 0.5
    );

    //  colocar ID em cada carta
    const setCardsID = shuffledCards.map((card) => {
      return { ...card, id: Math.random() };
    });

    setCards(setCardsID);
    setTurns(1);
    setPairsMatched(0);
  }



  //  escolha das cartas
  function handleChoice(card) {
    if (choiceOne) {
      card.flipped = true;
      setChoiceTwo(card);
      console.log("Card Two Choosen");
      // console.log(card);
    } else {
      card.flipped = true;
      setChoiceOne(card);
      console.log("Card One Choosen");
      // console.log(card);
    }
  }


  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        console.log("Cards Matched");
        choiceOne.matched = true;
        choiceTwo.matched = true;
        setPairsMatched((pairsMatched) => pairsMatched + 1);
        setTimeout(resetTurn, 1000);
      } else {
        console.log("Not Matched");
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (pairsMatched === cards.length / 2 && pairsMatched > 0) {
      alert("You Won!");
    }
  }, [pairsMatched]);

  useEffect(() => {
    shuffleCards();
  }, []);

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);

    if (choiceOne.src === choiceTwo.src) {
      choiceOne.flipped = true;
      choiceTwo.flipped = true;
    } else {
      choiceOne.flipped = false;
      choiceTwo.flipped = false;
    }

    setTurns((turns) => turns + 1);
    console.log("Turno: " + (turns + 1));
    setDisabled(false);
  }


function flipAllCards() {

  if (!allFlipped) {
    console.log("Flipping all");
    cards.map((card) => {
      if (card.matched === false) {
        card.flipped = true;
      }
      setAllFlipped(true);
    });
  } 
  
  
  else {
    console.log("Flipping Back");
    
    cards.map((card) => {
      if (card.matched === false) {
        card.flipped = false;
      }
      setAllFlipped(false);
    });
  }
}



  return (
    <div className="game">
      <h1>React DigiMatch</h1>

      <div className="info">
        <button className="button" onClick={shuffleCards}>
          New Game
        </button>
        <h3>Turn: {turns}</h3>
        <h3>Matched: {pairsMatched}</h3>
        {/* <button className="arrayOfCards" onClick={() => console.log(cards)}>
          {" "}
          Show Array of cards{" "}
        </button> */}
        <button className="arrayOfCards" onClick={flipAllCards}>
          {" "}
          Flip All Cards{" "}
        </button>

      </div>




      <div className="cardGrid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card.flipped}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}



export default Game;

