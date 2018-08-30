import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    // constructor(props) {
    //     super(props);
    // }




        onSubmit(e) {
        e.preventDefault();
        const guessValue = this.userGuess.value;
        console.log(guessValue);
    }

    addGuess(e) {
        e.preventDefault();
        this.setState({
            guesses: [...this.state.guesses, this.input.current.value]

        });

    }


    // guessCount() {
    //
    // }

    render() {

    return (
        <form onSubmit={(e) => this.onSubmit(e)}>
            <input
                type="text"
                ref={input => (this.userGuess = input)}
                name="userGuess"
                id="userGuess"
                className="text"
                maxLength="3"
                autoComplete="off"
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

