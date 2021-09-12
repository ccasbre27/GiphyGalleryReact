import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {
   
    const category = 'Dragon Ball';
    const gifs = [
        {
            id: 'ABC',
            url: 'https://localhost/something',
            title: 'Lorem ipsum'
        },
        {
            id: 'ABCD',
            url: 'https://localhost/something',
            title: 'Lorem ipsum'
        }
    ];

    beforeEach(() => {
        useFetchGifs.mockImplementation( category => {
            return { data: gifs, loading: false }
          });
    });
        
    test('should render the component', () => {
       
        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('should render items when the images are returned', () => {
       
        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);

    });
    

});
