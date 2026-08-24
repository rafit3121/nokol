import React from 'react';
import Description from '../components/Description';
import '../styles/ComputerThird.css';

const ComputerSecond = () => {
    return (
        <div className="computer-third-container">
            <header>
                <Description />
            </header>
            <main>
                <section className="list">
                    <div className="card">
                        <div className="img">
                            <img src="/images/python-1.jpeg" alt="Python Material" />
                        </div>
                        <div className="card-details">
                            <h3>Python Programming</h3>
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

export default ComputerSecond;
