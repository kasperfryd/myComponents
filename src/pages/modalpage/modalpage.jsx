import React from 'react'
import Modal from '../../components/modal/modal'

function ModalPage(){

    const modalContent = {
        item : [
          {img: "https://picsum.photos/1920/870", text: "Hello world"},
          {img: "https://picsum.photos/1920/830", text: "World Hello"},
          {img: "https://picsum.photos/1920/840", text: "Fine day"},
          {img: "https://picsum.photos/1920/850", text: "Indeed good sir!"},
        ]
      }

    return (
        modalContent && modalContent.item && modalContent.item.map((item, index) => {
            return (
                <Modal key={index} child={<p>{item.text}</p>}></Modal>
            )}
        )
    )
}

export default ModalPage