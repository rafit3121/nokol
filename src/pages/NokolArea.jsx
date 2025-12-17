import React from 'react';
import { Link } from 'react-router-dom';
import Description from '../components/Description';
import '../styles/NokolArea.css';

const NokolArea = () => {
    return (
        <div className="nokol-container">
            <main>
                <div className="title">
                    <h1>Nokol Area</h1>
                </div>

                <Description />

                <section className="main-layout">
                    <div className="layout1">
                        <button className="layout1title">
                            <a href="/images/নোটিশ.png" target="_blank" rel="noopener noreferrer">
                                📋Notice
                            </a>
                        </button>
                    </div>

                    <div className="layout2">
                        <div className="layout2card">
                            <a href="#">Computer 1st</a>
                        </div>

                        <div className="layout2card">
                            <a href="#">Computer 2nd</a>
                        </div>

                        <div className="layout2card">
                            <Link to="/computer-third">Computer 3rd</Link>
                        </div>

                        <div className="layout2card">
                            <Link to="/computer-forth">Computer 4th</Link>
                        </div>

                        <div className="layout2card">
                            <a href="#">Computer 5th</a>
                        </div>

                        <div className="layout2card">
                            <a href="#">Computer 6th</a>
                        </div>

                        <div className="layout2card">
                            <a href="#">Computer 7th</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default NokolArea;
