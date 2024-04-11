import React from 'react'

/* Assets */
import UGC from '../assets/Screenshot/UGC.png'
import HfA from '../assets/Screenshot/HfA.png'

function Project() {
    return (
        <>
            <div style={{ color: 'black' }} className="flex flex-col gap-4 lg:flex-row">
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <figure><img src={HfA} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            HfA Project (Home for All)
                        </h2>
                        <p>สามารถควบคุมอุปกรณ์ต่างๆ ในบ้านได้โดยใช้เสียงหรือสัมผัส</p>
                    </div>
                </div>
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <figure><img src={UGC} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Roblox UGC Program
                        </h2>
                        <p>A UGC Portfolio for UGC Program</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project