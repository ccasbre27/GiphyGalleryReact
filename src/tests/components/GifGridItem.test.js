import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Tests on <GifGridItem />', () => {

    const title = 'My title';
    const url = 'https://localhost/algo.jpg';

    const wrapper = 
        shallow(<GifGridItem 
            title={ title }
            url={ url } /> );


    test('should render the component', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a paragraph with the title', () => {
       
        const paragraph = wrapper.find('p');
        
        expect( paragraph.text().trim() ).toBe( title );

    });

    test('should load the sent url to display proper image and fill the alt with the title', () => {
        
        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });


    test('should have animate__fadeIn class', () => {
        
        const div = wrapper.find( 'div' );
        
        expect( div.prop('className') ).toContain('animate__fadeIn');
        
    })
    
    
    
        
});
