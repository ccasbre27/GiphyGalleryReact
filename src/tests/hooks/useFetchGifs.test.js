import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests on useFetchGifs', () => {
   
    test('should return the initial state', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );        
        const { data, loading } = result.current;

        await waitForNextUpdate({ timeout: 2000 });

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
    });

    test('should return an array filled and loading as false', async () => {
       
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );        
        await waitForNextUpdate({ timeout: 2000 });

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBeFalsy();

    });
    

});

