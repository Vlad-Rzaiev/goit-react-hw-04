import Modal from 'react-modal';
import style from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, imgItem }) {
  return (
    <Modal
      className={style.modal}
      overlayClassName={style.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      {imgItem && (
        <img
          className={style.img}
          src={imgItem.urls.regular}
          alt={imgItem.alt_description}
        />
      )}
    </Modal>
  );
}
