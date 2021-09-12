import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Tests on <AddCategory />', () => {
   
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> ); 

    // se realiza antes de cada prueba
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> ); 
    });

    test('should render the component', () => {
    
        expect( wrapper ).toMatchSnapshot();
    
    });

    test('should change the input field', () => {
       
        const value = 'Hello World';
        const input = wrapper.find('input');
        
        input.simulate('change', { target: { value: value } });
       
    });
    
    test('should not post the information on submit event', () => {

        wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
       
        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('should call setCategories and clear the input field', () => {
        
        const value = 'Hello World';
        const input = wrapper.find('input');
       
        input.simulate('change', { target: { value: value } });
        wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
       
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); // we expect to had called this function sending a function as argument
        expect( input.prop('value') ).toBe('');

    });
    
    
    

});
