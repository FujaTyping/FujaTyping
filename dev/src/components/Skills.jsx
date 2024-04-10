import React from 'react'

/* Assets */
import Python from '../assets/Icon/Python.svg'
import Javascript from '../assets/Icon/Javascript.svg'
import Cplusplus from '../assets/Icon/Cplusplus.svg'
import ReactIcon from '../assets/Icon/React.svg'
import Nodejs from '../assets/Icon/Nodejs.svg'
import Firebase from '../assets/Icon/Firebase.svg'
import Css from '../assets/Icon/Css.svg'
import Html from '../assets/Icon/Html.svg'
import LuaLang from '../assets/Icon/Lua.png'

function Skills() {
    return (
        <>
            <div className="avatar skill">
                <div className="w-16">
                    <img src={Python} />
                </div>
            </div>
            <div className="avatar skill">
                <div className="w-16">
                    <img src={Javascript} />
                </div>
            </div>
            <div className="avatar skill">
                <div className="w-16">
                    <img src={Cplusplus} />
                </div>
            </div>
            <div style={{ marginBottom: "10px" }} className="avatar">
                <div className="w-16">
                    <img src={ReactIcon} />
                </div>
            </div>
            <div className="avatar skill">
                <div className="w-16">
                    <img src={Css} />
                </div>
            </div>
            <div style={{ marginBottom: "10px" }} className="avatar">
                <div className="w-16">
                    <img src={Html} />
                </div>
            </div>
            <div style={{ marginBottom: "10px" }} className="avatar">
                <div className="w-16">
                    <img src={LuaLang} />
                </div>
            </div>
        </>
    )
}

export default Skills