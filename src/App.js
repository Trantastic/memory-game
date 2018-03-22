import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import cards from './cards.json';
import Jumbotron from './components/Jumbotron';

class App extends Component {

  state = {
    cards,
    score: 0,
    clicked: []
  };

  // When card is clicked
  click = (event) => {
    const clicked = this.state.clicked;
    const clickedCard = event.target.id;

    // Resets game if card has already been clicked (if it's in the clicked array)
    if(clicked.includes(clickedCard)){
      this.resetGame();
    }
    // Push into clicked array
    else{
      clicked.push(clickedCard);
      this.setState({score: this.state.score + 1})
      this.shuffle();

      if(clicked.length === 12){
        this.showWin();
      }
    }
  };

  // Restarts game in user loses or wins
  resetGame = () => {
    this.setState({
      score: 0,
      clicked: []
    });
    alert("Game Over!");
    this.shuffle();
  };

  // Randomizes/shuffles cards each time they're clicked
  shuffle = () => {
    this.setState({
      cards: this.state.cards.sort(
        (a,b) => {return 0.5 - Math.random();}
      )
    });
  };

  showWin = () => {
    alert("You won!");
  }

  render(){
    return(
      <div>
        <Navbar 
          score = {this.state.score}
        />
        <Jumbotron />
        {this.state.cards.map(card => (
          <Card 
            click = {this.click}
            id = {card.id}
            key = {card.id}
            name = {card.name}
            image = {card.image}
            clicked = {card.clicked}
          />
        ))}
      </div>
    );
  }
}

export default App;