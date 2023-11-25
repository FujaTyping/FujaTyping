import React from 'react'

function Dialog() {
    return (
        <>
            <dialog id="contract-model" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Contract me</h3>
                    <p className="py-4">Discord : @fujatyping (Fujatyping#0148)<br />Twitter (X) : @fujatyping<br />Mail : me@fujatyping.dev</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default Dialog