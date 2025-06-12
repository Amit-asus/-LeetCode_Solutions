document.addEventListener("DOMContentLoaded", function () {
  const app = document.querySelector(".app");
  console.log("hello") ;

  let products = [];
  let page =  1 ;
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      console.log(data)
      if (data && data.products) {
        products = data.products;
        render();
      }
    } catch (error) {
        console.log("error while fetching the data" , error ) ;
    }
  };


  //render function 
  const render = () => {
    const productContainer =  document.createElement("div") ;
    productContainer.classList.add("products") ;

    const pagination = document.createElement("div") ;
    pagination.classList.add("pagination") ;

    if(products.length > 0){
        products.slice(page*10-10 , page * 10).forEach((prod)=> {
            const productElement = document.createElement("div");
            productElement.classList.add("products__single") ;
            productElement.innerHTML =  ` <img src=${prod.thumbnail}  alt=${prod.title}>
            <span>${prod.title}</span>`
            productContainer.appendChild(productElement) ;
        })
    }

    if(page>1){
        const prevButton = createPaginationButton("<" ,()=> {
            selectPageHandler(page -1 ) ;
        })
        pagination.appendChild(prevButton) ;
    }

    //display the number button 
    for(let i = 0 ; i < products.length /10 ; i++){
        const pageButton = createPaginationButton(
          i + 1,
          () => {
            selectPageHandler(i + 1);
          },
          page === i + 1
        ); 
        pagination.appendChild(pageButton) ;
    }

    if(page < products.length /10) {
        const nextButton = createPaginationButton(">",()=> {
            selectPageHandler(page+1) ;
        })
        pagination.appendChild(nextButton)
    }
    
    app.innerHTML = "" ;
    app.appendChild(productContainer);
    app.appendChild(pagination) ;
  }

  const createPaginationButton = (text, clickHandler, isSlected = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    if (isSlected) {
      button.classList.add("pagination__selected");
    }
    return button;
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      page = selectedPage;
      render();
    }
  };

  fetchProducts();

});



