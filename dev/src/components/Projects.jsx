import React from 'react'

function Projects() {
  return (
    <>
      <div className="card w-50 bg-base-100 shadow-xl projects">
        <figure><img src="https://images-ext-1.discordapp.net/external/wvAQ5uqSIlwwge-OhZVCDPL9VHLpnhGieA4oMIKi-3k/https/opengraph.githubassets.com/b34dd612be331381f840a2ca7f80fc49deb3b88179532a0ac877007860bad0a7/FujaTyping/HfA-Project?format=webp&width=965&height=483" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"><b>HfA-Project</b></h2>
          <p className='card-details' >Smart home from arduino UNO</p>
          <div className="card-actions justify-end">
            <a href='https://project.fujatyping.dev/HfA' className="btn btn-primary">View project page <span className="material-symbols-outlined">captive_portal</span></a>
          </div>
        </div>
      </div>
      <div className="card w-50 bg-base-100 shadow-xl">
        <figure><img src="https://camo.githubusercontent.com/6ee13273f94ed9d88dd0528a83b72ba0ce34e0c1b2d6684eba023e5d64ac8d94/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313037313430313438353233393333323836342f313137373934343230363731353637303633382f42616e6e65722e706e67" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Yorwor64Slash10-Project</h2>
          <p className='card-details' >Web App ของ ห้อง 3/10! โครงการโอเพ่นซอร์สนี้ออกแบบมาเพื่อมอบแพลตฟอร์มที่สะดวกและมีประสิทธิภาพสำหรับการจัดการกิจกรรมในชั้นเรียน</p>
          <div className="card-actions justify-end">
            <a href='https://yorwor64slash10.web.app/about/webapp' className="btn btn-primary">View project page <span className="material-symbols-outlined">captive_portal</span></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects