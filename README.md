# MT-Product-card

Este es un paquete de pruebas de deespliegue en NPM

### Marcos Tataje

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mt-product-card'
```

```
  <ProductCard
      product={ product }
      initialValues={{
          count: 4,
          maxCount: 10
      }}
  >
      {
          ({ counter, isMaxCountReached, increaseBy, reset }) => (
              <>
                  {console.log(isMaxCountReached)}
                  <ProductImage />
                  <ProductTitle />
                  <ProductButtons />
              </>
          )   
      }
  </ProductCard>
```