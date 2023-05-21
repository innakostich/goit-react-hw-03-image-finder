
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  openModal = () => {
    basicLightbox.create(`<img src="${this.props.image}" alt="" />`).show();
  };

  render() {
    const { isOpen } = this.props;

    return (
      <div className={isOpen ? css.overlay : css.hidden} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={this.props.image} alt="" onClick={this.openModal} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

