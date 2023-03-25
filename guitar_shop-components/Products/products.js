class Products {

    render() {
        
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img}) => {
            // console.log(id, name, price, img);

            htmlCatalog += `
                 <li class="products-element">
                   <span class="products-element__name">${name}</span>
                   <img class="products-element__img" src="${img}" />

                     <span class="products-element__price">
                     🎸 ${price.toLocaleString()} UAH  
                     </span>
                   <button class="products-element__btn">Додати у корзину</button>
                 </li>
            `;
        });
        //МЕТОД(toLocaleString())ДОЗВОЛЯЄ РОЗДІЛЯТИ ЧИСЛА ПО ТРИ НУЛІ;

           const html = `
              <ul class="products-container">
                  ${htmlCatalog}
              </ul>
           `;

           ROOT_PRODUCTS.innerHTML = html;

    }

}

const productPage = new Products();
productPage.render();