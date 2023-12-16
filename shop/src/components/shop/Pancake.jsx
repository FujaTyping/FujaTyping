import React from 'react'
import Typed from 'typed.js';
import 'animate.css';
import CountUp from 'react-countup';
import './Shop.css'
import 'https://tally.so/widgets/embed.js';

/* Assets */
import Logo from '../../assets/shop/Pancake.png'
import Threechut from '../../assets/Icon/Yorwor.png'
import DividerHero from '../../assets/Head-divider.png'
import DividerFooter from '../../assets/Footer-divider.png'
import Member from '../../assets/Picture/MemPancake.png'
import PancakeBan from '../../assets/banner/Pancake-banner.png'
import DoughnutBan from '../../assets/banner/Doughnut-banner.png'
import AllPancakeBan from '../../assets/banner/AllPancake-banner.png'

/* Javascript */
import { ConfirmWebhook, sendWebhook } from '../javascript/SubmitPancake'
import { Check_scroll, GoTop } from '../javascript/ToTop'

function Pancake() {
  const handleSubmit = () => {
    sendWebhook();
  };

  const handleConfirmSubmit = () => {
    ConfirmWebhook();
  };

  const Tophandle = () => {
    GoTop();
  };

  const Typing = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(Typing.current, {
      strings: ['เราทำ " แพนเค้ก "', 'เราทำ " โดนัท "', '" แพนเค้ก และ โดนัท " โฮมเมด ทำสดใหม่ทุกวัน !', 'อร่อยไม่เหมือนใคร และ ไม่มีใครอยากเหมือน :D'],
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
        <button onClick={Tophandle} id='TopButton' className="btn btn-circle btn-outline button-top animate__animated animate__fadeInUpBig animeted-animation">
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
              <h1 className="text-5xl font-bold Itimfont"><thai>Meao</thai> แพนเค้ก</h1>
              <p className="py-6 Itimfont">แพนเค้ก " Meao แพนเค้ก " แพนเค้กโฮมเมด อบสดใหม่ทุกวัน ให้คุณได้สัมผัสรสชาติที่หอมกรุ่น อร่อยไม่เหมือนใคร แพนเค้กที่ถูกใจทุกคน สั่งเลยวันนี้</p>
              <div className="join join-vertical lg:join-horizontal">
                <a href='#ShopingForm' className="btn btn-secondary join-item Itimfont"><span className="material-symbols-outlined Gicon">
                  shopping_bag
                </span>สั่งชื้อ</a>
                <button onClick={() => document.getElementById('contract').showModal()} className="btn btn-neutral join-item Itimfont"><span className="material-symbols-outlined Gicon">
                  support_agent
                </span>ติดต่อ</button>
                <a href='#About' className="btn btn-neutral join-item Itimfont"><span className="material-symbols-outlined Gicon">
                  storefront
                </span>เกี่ยวกับโครงงาน</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero bg-base-100 Producter">
          <div style={{ padding: '80px' }} className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold"><thai>สินค้าทั้งหมด <span className="badge badge-primary Itimfont">ลดราคา !</span></thai></h1>
              <p className="py-6 Itimfont">ตอนนี้มีสินค้าอยู่ 2 ชนิด คือ แพนเค้ก กับ โดนัท <span className="badge badge-primary Itimfont">แพนเค้ก : ลดเหลือ 20 ฿aht และ โดนัท : ลดเหลือ 25 ฿aht</span></p>
              <div className="carousel w-full">
                <div id="Pancake" className="carousel-item relative w-full">
                  <img src={PancakeBan} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#AllPancake" className="btn btn-circle">❮</a>
                    <a href="#Doughnut" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="Doughnut" className="carousel-item relative w-full">
                  <img src={DoughnutBan} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#Pancake" className="btn btn-circle">❮</a>
                    <a href="#AllPancake" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="AllPancake" className="carousel-item relative w-full">
                  <img src={AllPancakeBan} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#Doughnut" className="btn btn-circle">❮</a>
                    <a href="#Pancake" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img width='100%' src={DividerHero}></img>
        <div id='ShopingForm' className="hero bg-base-200 Formmer">
          <div style={{ paddingTop: '80px', paddingBottom: '80px' }} className="hero-content flex-col lg:flex-row-reverse">
            <div style={{ marginLeft: '20px' }} className="text-center lg:text-left">
              <h1 className="text-5xl font-bold"><thai>สั่งเลยวันนี้ !</thai></h1>
              <p className="py-6"><span className='Itimfont' ref={Typing}></span></p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text Itimfont">ชื่อผู้สั่งชื้อ (ภาษาไทย) *</span>
                  </label>
                  <input id='Name' placeholder="ชื่อ" className="InputC input input-bordered Itimfont" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text Itimfont">สินค้า / จำนวน (ตัวเลข) *<br />ตัวอย่าง : <kbd className="kbd kbd-sm Itimfont">แพนเค้ก 1 , โดนัท 1</kbd></span>
                  </label>
                  <input id='Number' placeholder="แพนเค้ก 0" className="Itimfont InputC input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text Itimfont">สถานที รับของ (เวลา 07:00 - 07:40) *</span>
                  </label>
                  <div className="join join-vertical">
                    <input type="text" placeholder="โรงเรียน หาดใหญ่วิทยาลัย (บังคับ)" className="InputC join-item input input-bordered w-full max-w-xs Itimfont" disabled />
                    <input id='DecsPlace' placeholder="คำอธิบาย (รับของตรงไหน)" className="InputC join-item input input-bordered Itimfont" required />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text Itimfont">ช่องทางติดต่อกลับ *</span>
                  </label>
                  <input id='CallBack' placeholder="อีเมล , เบอร์โทร หรือ อื่นๆ" className="InputC input input-bordered Itimfont" required />
                </div>
                <div id='warninfo' style={{ display: 'none' }} className="form-control mt-6 animate__animated animate__shakeX">
                  <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className='Itimfont'>กรุณากรอกข้อมูลให้ครบถ้วน !</span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <div className="join join-vertical">
                    <button onClick={() => document.getElementById('Add').showModal()} className="btn btn-secondary join-item Itimfont"><span className="material-symbols-outlined Gicon">
                      variable_add
                    </span>ท็อปปปิ้ง เพิ่มเติม</button>
                    <button onClick={handleConfirmSubmit} className="btn btn-primary join-item Itimfont"><span className="material-symbols-outlined Gicon">
                      shopping_basket
                    </span>ส่งคำสั่งชื้อ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='About' className="hero bg-base-200 Aboutter">
          <div style={{ padding: '80px' }} className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold"><thai>เกี่ยวกับโครงงาน</thai></h1>
              <p className="py-6 Itimfont">โครงงานเป็นส่วนหนึ่งของวิชาการงานอาชีพ (ง23102) - โรงเรียน หาดใหญ่วิทยาลัย (ม. 3/10)</p>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img style={{ height: '100%', width: '100%' }} src={Member} alt="Album" /></figure>
                <div className="card-body">
                  <h2 className="card-title Itimfont">สมาชิก / เสนอครูประจำวิชา</h2>
                  <p className='Itimfont'>ชุติเดช แซ่สั้น เลขที่ 1<br />ตฤบดี เดซะปราโมทย์ เลขที่ 4<br />สิรภพ สุขชู เลขที่ 17<br />ปวริศร์ สุขเล็ก เลขที่ 21</p>
                </div>
              </div>
              <p className="py-6 Itimfont">สถิติ ทางการค้า :D<br />ตั้งแต่วันที่ 11 ธันวาคม 2566</p>
              <div className="stats shadow stats-vertical lg:stats-horizontal">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <span style={{ fontSize: '35px' }} className="material-symbols-outlined Gicon">
                      toc
                    </span>
                  </div>
                  <div className="stat-title Itimfont">ออเดอร์ (รายการ)</div>
                  <div className="stat-value"><thai><CountUp style={{ fontFamily: 'Sriracha' }} duration={5} end={1} delay={1} /></thai></div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <span style={{ fontSize: '32.5px' }} className="material-symbols-outlined Gicon">
                      inventory_2
                    </span>
                  </div>
                  <div className="stat-title Itimfont">ขายได้ (กล่อง)</div>
                  <div className="stat-value"><thai><CountUp style={{ fontFamily: 'Sriracha' }} duration={5} end={44} delay={1} /></thai></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img width='100%' src={DividerFooter}></img>
        <footer id='Footer' className="footer footer-center p-10 bg-primary text-primary-content betterfotter">
          <aside>
            <img width="50" height="50" src={Threechut}></img>
            <p className="font-bold Itimfont">
              โครงงาน - Meao แพนเค้ก <br />โรงเรียน หาดใหญ่วิทยาลัย<br />โครงงานเป็นส่วนหนึ่งของวิชาการงานอาชีพ (ง23102)
            </p>
            <p className='Itimfont'>ลิขสิทธิ์ © 2566 - สงวนลิขสิทธิ์ทั้งหมด</p>
            <button data-tally-open="3qRl52" data-tally-emoji-animation="none" data-tally-auto-close="5000" className="btn btn-secondary Itimfont" ><span className="material-symbols-outlined Gicon">
              query_stats
            </span>แบบสอบถามความพึงพอใจ</button>
          </aside>
        </footer>
        <dialog id="contract" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg Itimfont">ช่องทางติดต่อ</h3>
            <p className="py-4 Itimfont">โทรศัพท์ : 090-221-3635<br />ดิสคอร์ด : fujatyping (Fujatyping#0148)<br />ไอดีไลน์ : phantom_b<br />เว็ปไซต์ : shop.fujatyping.dev/pancake</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="Add" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg Itimfont">ท็อปปปิ้ง เพิ่มเติม (ไม่ใส่ไม่ต้องติก)</h3>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text Itimfont">ซ็อกโกแลตชิพ</span>
                <input id='CheckChoco' type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text Itimfont">ไวท์ซ็อกโกแลตชิพ</span>
                <input id='CheckWChoco' type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text Itimfont">เรนโบว์</span>
                <input id='CheckRain' type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text Itimfont">เยลลี้ เชอรี่</span>
                <input id='CheckJelly' type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text Itimfont">มาร์ชเมลโล</span>
                <input id='CheckMash' type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn Itimfont">ตกลง</button>
              </form>
            </div>
          </div>
        </dialog>
        <dialog id="SubmitConfirm" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg Itimfont">เตือน ! ข้อมูลสำหรับผู้แพ้อาหารดั้งนี้</h3>
            <p className="py-4 Itimfont">แป้งสาลี , นม , ถั่วเหลือง , ซัลไฟต์ และ ไข่<br /><br />กรุณาตรวจสอบว่าคุณหรือผู้ที่คุณบริโภคอาหารนี้เป็นผู้แพ้อาหารที่กล่าวถึง หากคุณไม่แน่ใจหรือมีคำถามเพิ่มเติมเกี่ยวกับส่วนประกอบของอาหาร กรุณาปรึกษาผู้เชี่ยวชาญด้านสุขภาพหรือหมอของคุณก่อนการบริโภคอาหารนี้ ความปลอดภัยของคุณคือสำคัญที่สุด!</p>
            <div className="modal-action">
              <button onClick={handleSubmit} className="btn btn-primary Itimfont">เข้าใจแล้ว</button>
              <form method="dialog">
                <button className="btn Itimfont">ปิด</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default Pancake