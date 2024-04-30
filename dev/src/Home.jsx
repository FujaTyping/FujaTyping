import React from 'react'
import './App.css'
import './index.css'
import 'animate.css';
import Typed from 'typed.js';
import { RandomReveal } from 'react-random-reveal'

/* Components */
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Dialog from './components/Dialog'
import Education from './components/Education'

/* Assets */
import icon from './assets/fav.png'
import dividerSec from './assets/Quote-divider.png'

function Home() {
    const QuoteTyping = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(QuoteTyping.current, {
            strings: ['" Any fool can write code that a computer can understand. Good programmers write code that humans can understand. "', '" Experience is the name everyone gives to their mistakes. "', `" 1 st rule of programming : If it works, don't touch it. "`],
            loop: true,
            showCursor: true,
            cursorChar: ' |',
            typeSpeed: 30,
            backDelay: 5000,
            backSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className="hero min-h-screen bg-base-200 headder animate__animated animate__fadeIn animate__delay-0.5s">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={icon} className="max-w-sm shadow-2xl rounded-full profile" /><br />
                    <div>
                        <h1 className="text-5xl font-bold title"><RandomReveal isPlaying duration={3} characters="Siraphop Sukchu" /></h1>
                        <p className="py-6">Hi ! , I'm <b>Siraphop Sukchu</b> you can call me <b>Fujatyping</b><br /><b>3D Modeler / Discord bot dev / Web developer / Roblox scripter</b></p>
                        <div className="join">
                            <a href='https://project.siraphop.me/' className="btn join-item btn-outline btn-primary"><span className="material-symbols-outlined">tactic</span>My project</a>
                            <button onClick={() => document.getElementById('contract-model').showModal()} className="btn join-item btn-neutral"><span className="material-symbols-outlined">deskphone</span>Contract me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 content skiller">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 style={{ textAlign: "left" }} className="text-5x1 font-bold title">My skills</h1>
                        <div style={{ marginTop: "30px" }}>
                            <div className="grid grid-cols-4 gap-4">
                                <Skills />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 content Educationner">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 style={{ textAlign: "left" }} className="text-5x1 font-bold title">Education</h1>
                        <p style={{ textAlign: "left" }} > การศึกษา</p>
                        <div style={{ marginTop: "30px" }}>
                            <div className="flex flex-col gap-4 lg:flex-row">
                                <Education />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 content projecter">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 style={{ textAlign: "left" }} className="text-5x1 font-bold title">Featured projects</h1>
                        <p style={{ textAlign: "left" }} > Here is some my project <a href='https://project.siraphop.me/' className="badge badge-primary">View more project</a></p>
                        <div style={{ marginTop: "30px" }}>
                            <Projects />
                        </div>
                    </div>
                </div>
            </div>
            <img style={{ width: "100%" }} src={dividerSec}></img>
            <div style={{ color: "white" }} className="hero min-h-screen bg-secondary quoter">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold title">Quotes</h1>
                        <p style={{ fontFamily: "Pacifico" }} className="py-6"><span style={{ fontFamily: "Pacifico" }} ref={QuoteTyping}></span></p>
                    </div>
                </div>
            </div>
            <Footer />
            <Dialog />
        </>
    )
}

export default Home