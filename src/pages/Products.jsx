import React from "react";
import products from "../data/data";
import { useState } from "react/cjs/react.development";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'




const Products = () => {

    const[items, setItems] = useState(products);

    const filterItem = (categItem) => {
        const updatedItems = products.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
    return (
        <>
            <br></br>


            <h1 className=" mt-5 shop-title">Products</h1>
            <div className ="menu-tabs container">
                <div className ="menu-tab d-flex justify-content-around">
                    <button className = "btn btn-warning" onClick ={() => setItems(products)}>All</button>
                    <button className = "btn btn-warning" onClick ={() => filterItem('Bands')}>Bands</button>
                    <button className = "btn btn-warning"onClick ={() => filterItem('Classic Movies')} >Classic Movies</button>
                    <button className = "btn btn-warning"onClick ={() => filterItem('Classic Shows')} >Classic Shows</button>
                    <button className = "btn btn-warning"onClick ={() => filterItem('Musicians')} >Musicians</button>
                    <button className = "btn btn-warning" onClick ={() => filterItem('Culture')}>Culture</button>
                </div>
            </div>
            <div className= "menu-items d-flex justify-content-around container-fluid mt-5 ">
                <div className ="row">
                    <div className =" col-11 mx-auto">
                        <div clasName="row my-5">
                            {
                                items.map((elem) => {
                                    const{ id,productName,category, price, image } = elem;
                                    return(
                                        
                                        <div className="item1 contain">
                                        <div className="row Item-inside">
                                           <div className = "col-12 col-md-12 col-lg-4 img-div">
                                           <img src={image} alt="productPic" className ="img-fluid items "/>
                                           </div> 

                                            <div className = "row-12 col-md-12 col-lg-8 ">
                                            
                                               
                                                <div className="main-title pt-4 pb-3">
                                                    <h1 className="title">{productName}</h1>
                                                    </div>
                                                        <div className ="menu-price-book">
                                                            <div className= "price-book-divide d-flex justify-content-between">
                                                                <h2>${price}</h2>
                                                                <a className="button btn btn-primary" href="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>Add to Cart</a>
                                                            </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div> 
                                            
                                     
 
                                    )
                                })
                            }
                            
                    </div>
                </div>
           </div>
           </div>
        </>
    );
};
export default Products;
