import React from 'react'

function Photopea() {
  React.useEffect(() => {
    document.getElementById('Credit').showModal()
    return () => {
    };
  }, []);

  return (
    <div data-theme="dark">
      <dialog id="Credit" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Notice</h3>
          <p className="py-4"><a href='https://fujatyping.dev/'>fujatyping.dev</a> Unleash Your Creativity with <a href='https://www.photopea.com/'>photopea.com</a> <b>(For Personal Use Only)</b></p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <iframe className='Embed' src='https://www.photopea.com/'></iframe>
    </div>
  )
}

export default Photopea