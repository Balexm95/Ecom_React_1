import React from 'react'



const Products = () => {

    return (

        <div>
            <h1 className="shop-title">Products</h1>
            <div id ="buttons">
                <button className = "button-value">All</button>
                <button className = "button-value">Bands</button>
                <button className = "button-value">classNameic Movies</button>
                <button className = "button-value">classNameic Shows</button>
                <button className = "button-value">Musicians</button>
                <button className = "button-value">Culture</button>

            </div>
            <main className="contain">
                <div>
                    <img src="images/tshirt1.jpeg" className="items" alt="Mr.Happy Tee" />
                    <p className="title">Love Mr. Happy Tee</p>
                    <p>$40 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a></p>


                </div>
                <div>
                    <img src="images/tshirt2.jpeg" className="items" alt="Grateful Dead Tee" />
                    <p className="title">Grateful Dead Tie Dye Tee</p>
                    <p>$45 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a> </p>

                </div>
                <div>
                    <img src="images/tshirt3.jpeg" className="items" alt="Tie Dye Tee" />
                    <p className="title">DefLepard Tie Dye Tee</p>
                    <p>$45 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a> </p>
                </div>
                <div>
                    <img src="images/tshirt4.jpeg" className="items" alt="Jimmy Hendrix" />
                    <p className="title">Jimmy Hendrix Tee</p>
                    <p>$40 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a></p>
                </div>
                <div>
                    <img src="images/tshirt5.jpeg" className="items" alt="Tune Squad" />
                    <p className="title">Tune Squad Tee</p>
                    <p>$40 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a></p>
                </div>
                <div>
                    <img src="images/tshirt6.jpeg" className="items" alt="Blondie Tee" />
                    <p className="title">Blondie Tee</p>
                    <p>$40 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a></p>
                </div>
                <div>
                    <img src="images/tshirt7.jpeg" className="items" alt="Jaws Tee" />
                    <p className="title">Jaws Tee</p>
                    <p>$40 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a></p>
                </div>
                <div>
                    <img src="images/tshirt8.jpeg" className="items" alt="Beatles Tees" />
                    <p className="title">Beatles Tee</p>
                    <p>$45 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a> </p>
                </div>
                <div>
                    <img src="images/tshirt9.jpeg" className="items" alt="Whitney Houston Tee" />
                    <p className="title">Whitney Houston Tee</p>
                    <p>$45 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a> </p>
                </div>
                <div>
                    <img src="images/tshirt10.jpeg" className="items" alt="Lisa Simpson Tee" />
                    <p className="title">Lisa Simpson Tee</p>
                    <p>$35 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a></p>
                </div>
                <div>
                    <img src="images/tshirt11.jpeg" className="items" alt="Woodstock Tee" />
                    <p className="title">Woodstock Tee</p>
                    <p>$35 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a></p>
                </div>
                <div>
                    <img src="images/tshirt12.jpeg" className="items" alt="Rose Distressed Tee" />
                    <p className="title">Rose Distressed Tee</p>
                    <p>$40 <br></br><hr></hr><a className="button" href="/Cart">Add to Cart</a></p>
                </div>
            </main>
        </div>
    )
}
export default Products;