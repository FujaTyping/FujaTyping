import React from 'react'
import Typed from 'typed.js';
import 'animate.css';

/* Components */
import Footer from './Footer'

function FourOhFour() {
    const Typing = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(Typing.current, {
            strings: ['Connection Lost'],
            loop: false,
            showCursor: true,
            cursorChar: ' |',
            typeSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div data-theme="vamvam">
                <div className="hero min-h-screen bg-base-200 Notfounder animate__animated animate__fadeIn animate__delay-0.5s">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <span className="text-5xl font-bold Science" ref={Typing}></span>
                            <p className="py-6">The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
                            <a href='/' className="btn btn-primary animate__animated animate__fadeInUp animate__delay-3s">Reconnect ...</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default FourOhFour