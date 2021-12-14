import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';
import { ProductImage } from '../../src/components/ProductImage';



describe('Pruebas en ProductImage', () => {
    
    test('Debe de cargarse correctamente', () => {
        
        const wrapper = renderer.create(
            <ProductImage img="http://hola.jpg" className="custom-class" />
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();

    })

    test('Debe comprobar que existe la imagen', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();

    })

})
