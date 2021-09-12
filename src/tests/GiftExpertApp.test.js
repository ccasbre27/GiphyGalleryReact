import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GiftExpertApp } from '../GiftExpertApp';

describe('Tests on <GiftExpertApp />', () => {
   
    test('should render the app', () => {
        
        const wrapper = shallow( <GiftExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('should load a list of categories', () => {
       
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GiftExpertApp defaultCategories={ categories } /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    });
    

});
