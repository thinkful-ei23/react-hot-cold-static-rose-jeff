import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    

    onSubmit(e) {
        let count = 0; 

        event.preventDefault();
        console.log('submitted');
        this.setState({
            count: count++
        });
    }

    guessCount() {
        
    }

    render() { 

    return (
        <form onSubmit={(e) => this.onSubmit(e)}>
            <input
                type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                />
            <input 
                   type="submit"
                   id="guessButton"
                   className="button"
                   name="submit"
                   value="Guess" />
        </form>
    );
    } 
};

