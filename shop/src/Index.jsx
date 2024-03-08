import React from 'react'
const Shopplaceholder = '<SHOPNAME_HERE>'

/* Components */
import Footer from './components/Footer'

function Index() {
  return (
    <>
      <div data-theme="vamvam">
        <div className="hero min-h-screen bg-base-200 animate__animated animate__fadeIn animate__delay-0.5s Indexder">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5x1 font-bold title">Welcome to shop Index</h1>
              <p className="py-6">You're visiting the site without an shop name, Please check the url again <span className="badge badge-primary">shop.siraphop.me/{Shopplaceholder}</span></p>
              <a href='https://siraphop.me/' className="btn btn-primary"><span className="material-symbols-outlined Gicon">
                home
              </span>Home page</a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Index