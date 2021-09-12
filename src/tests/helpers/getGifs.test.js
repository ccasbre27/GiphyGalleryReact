import { getGifs } from "../../helpers/getGifs";

describe('Tests on getGifs', () => {
   
    test('should load 10 elements', async () => {
       
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    });

    test('should not load any element', async () => {
       
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    });

});
