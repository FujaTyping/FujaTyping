import React from 'react'

/* Assets */
import Threechut from '../assets/Icon/Yorwor.png'

function LLSTSK() {
  return (
    <>
      <div data-theme="aqua">
        <div className="hero min-h-screen bg-base-200 animate__animated animate__fadeIn animate__delay-0.5s">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="avatar">
                <div style={{ width: '80px', height: '80px' }} className="w-24">
                  <img src={Threechut} />
                </div>
              </div>
              <h1 style={{ marginTop: '20px' }} className="text-5xl font-bold">ร้อยรักษ์ศิลป์ถิ่นสงขลา</h1>
              <p className="py-6 animate__animated animate__fadeIn animate__delay-2s"><span className="loading loading-spinner loading-xs"></span> กำลังประมวลผลวีดีโอ (มนต์เสน่ห์แห่งทะเลสาบสงขลา.mp4) โปรดรอสักครู่</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LLSTSK