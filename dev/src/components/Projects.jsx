import React from 'react'

/* Assets */
import Pancake from '../assets/Screenshot/Pancake.png'
import HfA from '../assets/Screenshot/HfA-Project.webp'
import Yw64 from '../assets/Screenshot/Yw64Sl10.png'

function Projects() {
  return (
    <>
      <div className="card w-50 bg-base-100 shadow-xl projects">
        <figure><img src={Pancake} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"><b>Meao แพนเค้ก</b></h2>
          <p className='card-details' >แพนเค้ก " Meao แพนเค้ก " แพนเค้กโฮมเมด อบสดใหม่ทุกวัน ให้คุณได้สัมผัสรสชาติที่หอมกรุ่น อร่อยไม่เหมือนใคร</p>
          <div className="card-actions justify-end">
            <a href='https://shop.fujatyping.dev/pancake' className="btn btn-primary">View project page <span className="material-symbols-outlined">captive_portal</span></a>
          </div>
        </div>
      </div>
      <div className="card w-50 bg-base-100 shadow-xl projects">
        <figure><img src={HfA} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"><b>HfA-Project</b></h2>
          <p className='card-details' >Smart home from arduino UNO</p>
          <div className="card-actions justify-end">
            <a href='https://project.fujatyping.dev/HfA' className="btn btn-primary">View project page <span className="material-symbols-outlined">captive_portal</span></a>
          </div>
        </div>
      </div>
      <div className="card w-50 bg-base-100 shadow-xl">
        <figure><img src={Yw64} alt="Shoes" /></figure>
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