import React from 'react';
import Description from '../components/Description';
import '../styles/ComputerThird.css';

const ComputerFirst = () => {
    return (
        <div className="computer-third-container">
            <header>
                <Description />
            </header>
            <main>
                <section className="list">
                    <div className="card">
                        <div className="img">
                            <img src="/images/math-1.png" alt="Discrete Mathematics Material" />
                        </div>
                        <div className="card-details">
                            <h3>Mathematics-1</h3>
                            <a
                                href="https://forms.gle/avoxnKjbqvLMyPDFA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download Now
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src="/images/Bangla-1.png" alt="Bangla-1 Material" />
                        </div>
                        <div className="card-details">
                            <h3>Bangla-1</h3>
                            <a
                                href="https://forms.gle/avoxnKjbqvLMyPDFA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ComputerFirst;
