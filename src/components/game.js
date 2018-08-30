import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: 'Make your guess!',
            count: 3,
            guesses: [],
            answer: Math.ceil(Math.random() * 100)
        }
    }

    render() {


        return (
            <div>
                <Header/>
                <GuessSection feedback="Make your guess!"/>
                <GuessCount count={3}/>
                <GuessList guesses={[10, 15, 25]}/>
            </div>
        );
    }
}

