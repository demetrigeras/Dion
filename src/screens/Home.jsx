import Nav from "../components/Nav.jsx";
import { NavLink, useParams } from "react-router-dom";


const Home = ({user}) => {


    
    return (
        <div className="Home">
             {user ? (
            <h1>Home</h1>
            ) : (
                <div className="proseed-screen">
            <div className="image-container"></div>
            <div className="proseed">
              <div className="homepage">
                {/* <header> Welcome to Proseed</header> */}
              </div>
              <div className="signInorOut">
                <NavLink className="sign-up-nav" to="/sign-up">
                  Sign Up
                </NavLink>
                <NavLink className="sign-in-nav" to="/sign-in">
                  Sign In
                </NavLink>
              </div>
            </div>
          </div>
                
            )}
        </div>
    )
}

export default Home