import { Link } from "react-router-dom";

export const Error = () => {
    return (
        <><section className="page_404">
        <div className="container">
          <div className="row"> 
          <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1  text-center">
          <div className="four_zero_four_bg">
            <h1 className="text-center ">404</h1>
          
          
          </div>
          
          <div className="contant_box_404">
          <h3 className="h2">
          Looks like I might not be the date you are looking for!
          </h3>
          
          <p>LETS FIND YOU SOMEONE BETTER :)</p>
          
          <Link to="/" className="link_404">Go to Home</Link>
        </div>
          </div>
          </div>
          </div>
        </div>
      </section></>
    );
}



{/* html portion
<section className="page_404">
  <div className="container">
    <div className="row"> 
    <div className="col-sm-12 ">
    <div className="col-sm-10 col-sm-offset-1  text-center">
    <div className="four_zero_four_bg">
      <h1 className="text-center ">404</h1>
    
    
    </div>
    
    <div className="contant_box_404">
    <h3 className="h2">
    Look like I might not be the date you are looking for!
    </h3>
    
    <p>the page you are looking for not avaible!</p>
    
    <a href="" className="link_404">Go to Home</a>
  </div>
    </div>
    </div>
    </div>
  </div>
</section> */}

