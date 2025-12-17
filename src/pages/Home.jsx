import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <main>
                <div className="web-heading">
                    <h1>Nokol Website</h1>
                </div>
                <div className="web-button">
                    <Link to="/nokol-area" className="enter-button">
                        Enter
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Home;
