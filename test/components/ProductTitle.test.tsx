import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/products';


describe('Pruebas en ProducTitle', () => {

    test('Debe mostrar correctamente el componente con el titulo personalizado', () => {
        
        const wrapper = renderer.create(
            <ProductTitle title="Custom counter" className="custom-class" />
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();
    })

    test('Debe de mostrar el componente con el nombre del producto', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();

    })
    

})

