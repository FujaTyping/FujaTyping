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
          <h2 className="card-title"><b>Meao แพนเค้ก</b> <div class="badge badge-primary">Web dev</div></h2>
          <p className='card-details' >แพนเค้ก " Meao แพนเค้ก " แพนเค้กโฮมเมด อบสดใหม่ทุกวัน ให้คุณได้สัมผัสรสชาติที่หอมกรุ่น อร่อยไม่เหมือนใคร</p>
          <div className="card-actions justify-end">
            <a href='https://shop.siraphop.me/pancake' className="btn btn-primary">View project page <span className="material-symbols-outlined">captive_portal</span></a>
          </div>
        </div>
      </div>
      <div className="card w-50 bg-base-100 shadow-xl projects">
        <figure><img src={HfA} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"><b>HfA-Project</b> <div class="badge badge-primary">Arduino</div></h2>
          <p className='card-details' >Smart home from arduino UNO</p>
          <div className="card-actions justify-end">
            <a href='https://github.com/FujaTyping/HfA-Project' className="btn btn-primary">View project page <span className="material-symbols-outlined">captive_portal</span></a>
          </div>
        </div>
      </div>
      <div className="card w-50 bg-base-100 shadow-xl">
        <figure><img src={Yw64} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"><b>Yw64Sl10-Project</b> <div class="badge badge-primary">Web dev</div></h2>
          <p className='card-details' >Web App ของ ห้อง 3/10! โครงการโอเพ่นซอร์สนี้ออกแบบมาเพื่อมอบแพลตฟอร์มที่สะดวกและมีประสิทธิภาพสำหรับการจัดการกิจกรรมในชั้นเรียน</p>
          <div className="card-actions justify-end">
            <a href='https://talent.siraphop.me/about/webapp' className="btn btn-primary">View project page <span className="material-symbols-outlined">captive_portal</span></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects