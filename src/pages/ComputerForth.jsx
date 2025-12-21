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
                            <img src="/images/Java-programming.jpg" alt="Java Programming Material" />
                        </div>
                        <div className="card-details">
                            <h3>Java Programming</h3>
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
                                src="/images/Digital-electronics-2.jpg"
                                alt="Digital Electronics 2 Material"
                            />
                        </div>
                        <div className="card-details">
                            <h3>Digital Electronics 2</h3>
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
                            <img src="/images/Data-structure-and-algorithm.jpg" alt="Data Structure and Algorithm Material" />
                        </div>
                        <div className="card-details">
                            <h3>Data Structure and Algorithm</h3>
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
                            <img src="/images/Computer-peripherals-and-interfacing.jpg" alt="Computer Peripherals and Interfacing Material" />
                        </div>
                        <div className="card-details">
                            <h3>Computer Peripherals and Interfacing</h3>
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
                            <img src="/images/Web-Design-Development1.jpg" alt="Web Design Development Material" />
                        </div>
                        <div className="card-details">
                            <h3>Web Design Development</h3>
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
                            <img src="/images/Environmental-Studies.jpg" alt="Environmental Studies Material" />
                        </div>
                        <div className="card-details">
                            <h3>Environmental Studies</h3>
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
                            <img src="/images/Business-Communication.jpg" alt="Business Communication Material" />
                        </div>
                        <div className="card-details">
                            <h3>Business Communication</h3>
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
