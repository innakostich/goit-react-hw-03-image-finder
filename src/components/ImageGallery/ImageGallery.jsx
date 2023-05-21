import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import Modal from '../Modal/Modal';
import { nanoid } from 'nanoid';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImage: '',
    };
  }

  handleImageClick = (imageUrl) => {
    this.setState({ modalImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ modalImage: '' });
  };

  render() {
    const { images } = this.props;
    const { modalImage } = this.state;

    return (
      <div>
        <ul className={css.gallery}>
          {images.map((image) => (
            <ImageGalleryItem
              key={nanoid()}
              image={image}
              onClick={this.handleImageClick}
            />
          ))}
        </ul>
        <Modal
          isOpen={modalImage !== ''}
          image={modalImage}
          onClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
