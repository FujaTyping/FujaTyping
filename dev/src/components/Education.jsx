import React from 'react'

/* Assets */
import Pholl from '../assets/Icon/Phol-logo.png'
import Ywl from '../assets/Icon/Yorwor-logo.png'

function Education() {
    return (
        <>
            <div className="card max-w-sm bg-base-100 shadow-xl">
                <figure><img src={Pholl} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Pholwitaya School
                    </h2>
                    <p>ระดับชั้้นประถมศึกษา</p>
                </div>
            </div>
            <div className="card max-w-sm bg-base-100 shadow-xl">
                <figure><img src={Ywl} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Hatyaiwittayalai School
                    </h2>
                    <p>ระดับชั้้นประมัถยมศึกษา</p>
                </div>
            </div>
        </>
    )
}

export default Education