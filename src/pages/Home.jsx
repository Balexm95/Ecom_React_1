import React from "react";

const Home = () => {
   
  return (
    <>
        <section className="text">
          <h1>vin·tage</h1>
          <br />
          <h2>adjective</h2>
          <p>
            denoting something of high quality, especially something from the
            past or characteristic of the best period of a person's work.
          </p>
          <br />
          <br />
          <a className="button" href="/products">
            Shop Now!
          </a>
        </section>
        
        <main className="slideshow-container">
          <img src="/images/tshirt3.jpeg" alt="Slide 4" />
          <img src="/images/tshirt12.jpeg" alt="Slide 3" />
          <img src="/images/tshirt5.jpeg" alt="Slide 2" />
          <img src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Slide 1" />
          
          {/* <img
            src="https://ragstock.com/wp-content/uploads/vintage-tees-vintage-hompage-block1.jpg"
            alt="Slide 1"
            height="1884"
            width="1508"
          /> */}
        </main>
        <div className ="sale-card">
        <div className="row">
          <div className="col-sm-6">
          <div className="card">
          
              <div className="card-body">
                <h5 className="card-title">SALE!</h5>
                <p className="card-text">Don't miss out on this Sale</p>
                <p>Shop clearance and sale clothing at American Eagle Outfitters to find your new favorite styles. Shop sale items including men's and women's tops, jeans.</p>
                
                
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
            
              <div className="card-body">
                <h5 className="card-title">SHOP NOW!</h5>
                <p className="card-text">
                If you are looking for a good deal on your next outfit, take a look at VINTEES online sale. Take 30-50% off your favorite clothes, shoes and accessories.
                </p>
               <p>Shop clearance and sale clothing at VINTEES to find your new favorite styles. Shop sale items including men's and women's tops, jeans.</p>
               
                </div>
                </div>
              </div>
            </div>
            <div className= "slider-container">
                
           
            
          </div>
          </div>
          
     
    </>
  );
};
export default Home;
