import React from 'react'
import Typed from 'typed.js';
import 'animate.css';
import './Shop.css'

/* Assets */
import Logo from '../../assets/shop/Pancake.png'
import Threechut from '../../assets/Icon/Yorwor.png'
import DividerHero from '../../assets/Head-divider.png'
import DividerFooter from '../../assets/Footer-divider.png'
import Member from '../../assets/Picture/MemPancake.png'
import PancakeBan from '../../assets/banner/Pancake-banner.png'
import DoughnutBan from '../../assets/banner/Doughnut-banner.png'

/* Javascript */
import sendWebhook from '../javascript/SubmitPancake'
import { Check_scroll, GoTop } from '../javascript/ToTop'

function Pancake() {
  const handleSubmit = () => {
    sendWebhook();
  };

  const Tophandle = () => {
    GoTop();
  };

  const Typing = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(Typing.current, {
      strings: ['เราทำ " แพนเค้ก "', 'เราทำ " โดนัท "', '" แพนเค้ก และ โดนัท " โฮมเมด อบสดใหม่ทุกวัน !', 'อร่อยไม่เหมือนใคร และ ไม่มีใครอยากเหมือน :D'],
      loop: true,
      showCursor: true,
      cursorChar: ' |',
      typeSpeed: 50,
      backDelay: 1500,
      backSpeed: 25,
    });

    window.onscroll = function () {
      Check_scroll();
    };

    return () => {
      typed.destroy();
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <div data-theme="meao">
        <button onClick={Tophandle} id='TopButton' className="btn btn-circle btn-outline button-top animate__animated">
          <span className="material-symbols-outlined Gicon">
            vertical_align_top
          </span>
        </button>
        <div className="hero min-h-screen bg-base-100 Headder animate__animated animate__fadeIn animate__delay-0.5s">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="avatar online">
                <div style={{ width: '230px', height: '230px' }} className="w-24">
                  <img src={Logo} />
                </div>
              </div>
              <h1 className="text-5xl font-bold"><thai>Meao</thai> แพนเค้ก</h1>
              <p className="py-6">แพนเค้ก " Meao แพนเค้ก " แพนเค้กโฮมเมด อบสดใหม่ทุกวัน ให้คุณได้สัมผัสรสชาติที่หอมกรุ่น อร่อยไม่เหมือนใคร แพนเค้กที่ถูกใจทุกคน สั่งเลยวันนี้</p>
              <div className="join join-vertical lg:join-horizontal">
                <a href='#ShopingForm' className="btn btn-secondary join-item"><span className="material-symbols-outlined Gicon">
                  shopping_bag
                </span>สั่งชื้อ</a>
                <button onClick={() => document.getElementById('contract').showModal()} className="btn btn-neutral join-item"><span className="material-symbols-outlined Gicon">
                  support_agent
                </span>ติดต่อ</button>
                <a href='#About' className="btn btn-neutral join-item"><span className="material-symbols-outlined Gicon">
                  storefront
                </span>เกี่ยวกับโครงงาน</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero bg-base-100 Producter">
          <div style={{ padding: '80px' }} className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold"><thai>สินค้าทั้งหมด</thai></h1>
              <p className="py-6">ตอนนี้มีสินค้าอยู่ 2 ชนิด คือ แพนเค้ก กับ โดนัท</p>
              <div className="carousel w-full">
                <div id="Pancake" className="carousel-item w-full">
                  <img src={PancakeBan} className="w-full" />
                </div>
                <div id="Doughnut" className="carousel-item w-full">
                  <img src={DoughnutBan} className="w-full" />
                </div>
              </div>
              <div className="flex justify-center w-full py-2 gap-2">
                <a href="#Pancake" className="btn btn-xs">{"<"} แพนเค้ก</a>
                <a href="#Doughnut" className="btn btn-xs">โดนัท {">"}</a>
              </div>
            </div>
          </div>
        </div>
        <img width='100%' src={DividerHero}></img>
        <div id='ShopingForm' className="hero bg-base-200 Formmer">
          <div style={{ paddingTop: '80px', paddingBottom: '80px' }} className="hero-content flex-col lg:flex-row-reverse">
            <div style={{ marginLeft: '20px' }} className="text-center lg:text-left">
              <h1 className="text-5xl font-bold"><thai>สั่งเลยวันนี้ !</thai></h1>
              <p className="py-6"><span ref={Typing}></span></p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ชื่อผู้สั่งชื้อ (ภาษาไทย) *</span>
                  </label>
                  <input id='Name' placeholder="ชื่อ" className="InputC input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">สินค้า / จำนวน (ตัวเลข) *<br />ตัวอย่าง : <kbd className="kbd kbd-sm">แพนเค้ก 1 , โดนัท 1</kbd></span>
                  </label>
                  <input id='Number' placeholder="แพนเค้ก 0" className="InputC input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">สถานที รับของ (เวลา 07:00 - 07:40) *</span>
                  </label>
                  <div className="join join-vertical">
                    <input type="text" placeholder="โรงเรียน หาดใหญ่วิทยาลัย (บังคับ)" className="InputC join-item input input-bordered w-full max-w-xs" disabled />
                    <input id='DecsPlace' placeholder="คำอธิบาย (รับของตรงไหน)" className="InputC join-item input input-bordered" required />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ช่องทางติดต่อกลับ *</span>
                  </label>
                  <input id='CallBack' placeholder="อีเมล , เบอร์โทร หรือ อื่นๆ" className="InputC input input-bordered" required />
                </div>
                <div id='warninfo' style={{ display: 'none' }} className="form-control mt-6 animate__animated animate__shakeX">
                  <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>กรุณากรอกข้อมูลให้ครบถ้วน !</span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button onClick={handleSubmit} className="btn btn-primary">ส่งคำสั่งชื้อ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='About' className="hero bg-base-200 Aboutter">
          <div style={{ padding: '80px' }} className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold"><thai>เกี่ยวกับโครงงาน</thai></h1>
              <p className="py-6">โครงงานเป็นส่วนหนึ่งของวิชาการงานอาชีพ (ง23102) - โรงเรียน หาดใหญ่วิทยาลัย (ม. 3/10)</p>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img style={{ height: '100%', width: '100%' }} src={Member} alt="Album" /></figure>
                <div className="card-body">
                  <h2 className="card-title">สมาชิก / เสนอครูประจำวิชา</h2>
                  <p>ชุติเดช แซ่สั้น เลขที่ 1<br />ตฤบดี เดซะปราโมทย์ เลขที่ 4<br />สิรภพ สุขชู เลขที่ 17<br />ปวริศร์ สุขเล็ก เลขที่ 21</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img width='100%' src={DividerFooter}></img>
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
          <aside>
            <img width="50" height="50" src={Threechut}></img>
            <p className="font-bold">
              โครงงาน - Meao แพนเค้ก <br />โรงเรียน หาดใหญ่วิทยาลัย<br />โครงงานเป็นส่วนหนึ่งของวิชาการงานอาชีพ (ง23102)
            </p>
            <p>ลิขสิทธิ์ © 2566 - สงวนลิขสิทธิ์ทั้งหมด</p>
          </aside>
        </footer>
        <dialog id="contract" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">ช่องทางติดต่อ</h3>
            <p className="py-4">โทรศัพท์ : 090-221-3635<br />ดิสคอร์ด : fujatyping (Fujatyping#0148)<br />ไอดีไลน์ : phantom_b<br />เว็ปไซต์ : shop.fujatyping.dev/pancake</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  )
}

export default Pancake