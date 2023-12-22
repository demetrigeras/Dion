import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav';

const Welcome = ({ user }) => {
    return (
        <div className="Home">
            {user ? (
                <>
                    <Nav user={user} />
                    <h1>Welcome to Dion this is welcome page</h1>
                </>
            ) : (
                <div className="dion-screen">
                    <div className="image-container"></div>
                    <div className="dion">
                        <div className="homepage">
                            <header>Welcome to Dion</header>
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
    );
};

export default Welcome;