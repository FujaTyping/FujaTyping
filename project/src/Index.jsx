import React from 'react'
const Projectplaceholder = '<PROJECTNAME_HERE>'

/* Components */
import Footer from './components/Footer'
import Project from './components/Project'

/* Assets */
import githubIcon from './assets/Icon/Github.svg'
import divier from './assets/project-divider.png'

function Index() {
  return (
    <>
      <div data-theme="vamvam">
        <div className="hero min-h-screen bg-base-200 animate__animated animate__fadeIn animate__delay-0.5s Indexder">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5x1 font-bold title">Welcome to project Index</h1>
              <p className="py-6">You're visiting the site without an project name, Please check the url again <span className="badge badge-primary">project.siraphop.me/{Projectplaceholder}</span></p>
              <div className="join">
                <a href='https://siraphop.me/' className="btn btn-primary join-item"><span className="material-symbols-outlined Gicon">
                  home
                </span>Home page</a>
                <a href='https://github.com/FujaTyping' className="btn btn-accent join-item"><img src={githubIcon} />My project</a>
              </div>
            </div>
          </div>
        </div>
        <img style={{ width: "100%" }} src={divier}></img>
        <div style={{ color: "white" }} className="hero min-h-screen bg-secondary Projecter">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 style={{ textAlign: "left" }} className="text-5x1 font-bold title">More featured projects</h1>
              <p style={{ textAlign: "left" }} > Here is some my other project</p>
              <div style={{ marginTop: "30px" }}>
                <Project />
                <br />
                <div className="join">
                  <button className="join-item btn btn-active">1</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index