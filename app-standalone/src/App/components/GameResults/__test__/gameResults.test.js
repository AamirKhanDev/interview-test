import React from 'react';
import { shallow } from 'enzyme';
import GameResults from '../GameResults';

describe('GameResults', () => {

    it('renders the GameResults', () => {
        const item = shallow(<GameResults wins={[]}/>);
        expect(item.find('.gameHistory').text()).toEqual('Game History');
    });

    it('Renders GameResults with correct win counts', () => {
        const item = shallow(<GameResults wins={['Y','X','Y','Y','Y','Y','Y']}/>);
        expect(item.find('.playerXWins').text()).toEqual('Player X has 1 wins');
        expect(item.find('.playerYWins').text()).toEqual('Player Y has 6 wins');
    });
   it('Renders right amount of games in history', async () => {
        const item = shallow(<GameResults wins={['X','X','Y','Y','Y']}/>);
        expect(item.find('.gameWins').length).toEqual(5);
    });
});