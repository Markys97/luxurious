import { useState } from 'react'
import './modal.css'

function Modal() {
    const [isModalOpen, setOpenModal] =useState()
  return (
   <div className="modal">
    <div className="modal__container">
        <div className="modal__content">
            <div className="modal__close-icon">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3.19922" y="0.151367" width="21.3333" height="4.26667" rx="2.13333" transform="rotate(45 3.19922 0.151367)" fill="#D6DDE0"/>
                    <rect y="15.085" width="21.3333" height="4.26667" rx="2.13333" transform="rotate(-45 0 15.085)" fill="#D6DDE0"/>
                </svg>
            </div>
            <div className="modal__body">
                some text
            </div>
        </div>
    </div>
   </div>
  )
}

export default Modal