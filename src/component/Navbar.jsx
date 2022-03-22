import React from 'react'





const Navbar = () =>{

    
  return (

   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    
      <a className="navbar-brand fw-bold fs-4" href="/">VINTEES</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
    
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <a href = "/cart" className = "btn btn ms-2"> 
        <i class="fa-solid fa-bag-shopping"></i>Cart (0)</a>
       </div>
      </div>
      
  </nav> 
  </>
  );
};


export default Navbar;