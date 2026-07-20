import React from 'react';
import Description from '../components/Description';
import '../styles/ComputerThird.css';

const ComputerFifth = () => {
    return (
        <div className="computer-third-container">
            <header>
                <Description />
            </header>
            <main>
                <section className="list">
                    <div className="card">
                        <div className="img">
                            <img src="/images/Ac.jpg" alt="Accounting" />
                        </div>
                        <div className="card-details">
                            <h3>Accounting</h3>
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
                                src="/images/CAM.jpg"
                                alt="Computer Architecture & Microprocessor"
                            />
                        </div>
                        <div className="card-details">
                            <h3>Computer Architecture & Microprocessor</h3>
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
                            <img src="/images/Data_communication.jpg" alt="Data Communication" />
                        </div>
                        <div className="card-details">
                            <h3>Data Communication</h3>
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
                            <img src="/images/java_2.jpg" alt="Application Development Using Java" />
                        </div>
                        <div className="card-details">
                            <h3>Application Development Using Java</h3>
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
                            <img src="/images/OS.jpg" alt="Operating System" />
                        </div>
                        <div className="card-details">
                            <h3>Operating System</h3>
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
                            <img src="/images/web_2.jpg" alt="Web Development 2" />
                        </div>
                        <div className="card-details">
                            <h3>Web Development 2</h3>
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

export default ComputerFifth;
