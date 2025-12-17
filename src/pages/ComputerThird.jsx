import React from 'react';
import Description from '../components/Description';
import '../styles/ComputerThird.css';

const ComputerThird = () => {
    return (
        <div className="computer-third-container">
            <header>
                <Description />
            </header>
            <main>
                <section className="list">
                    <div className="card">
                        <div className="img">
                            <img src="/images/Math 3.jpg" alt="Math-3 Material" />
                        </div>
                        <div className="card-details">
                            <h3>Math-3</h3>
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
                            <img
                                src="/images/Digital Electronics.jpg"
                                alt="Digital Electronics Material"
                            />
                        </div>
                        <div className="card-details">
                            <h3>Digital Electronics 1</h3>
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
                            <img src="/images/Python 2.jpg" alt="Python 2 Material" />
                        </div>
                        <div className="card-details">
                            <h3>Python 2</h3>
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
                            <img src="/images/Physics 2.jpg" alt="Physics 2 Material" />
                        </div>
                        <div className="card-details">
                            <h3>Physics 2</h3>
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

export default ComputerThird;
