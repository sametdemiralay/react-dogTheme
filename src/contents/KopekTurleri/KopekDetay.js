import React from 'react'
import Modal from "@material-ui/core/Modal";

export const KopekDetay = ({classes, kopek, open, handleOpen}) => {

  return (
    <Modal
    open={open}
    className={classes.modal}
    onClose={handleOpen}
   >
    <div className={classes.paper}>
     <h2 className={classes.paperTitle}>{kopek.isim}</h2>
     <p className={classes.paperTitle}>
      {kopek.onBilgi}
     </p>
    </div>
   </Modal>
  )
}
