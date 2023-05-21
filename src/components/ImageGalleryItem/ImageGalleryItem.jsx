
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';


class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;

    return (
      <li className={css.galleryItem} onClick={() => onClick(image.largeImageURL)}>
        <img className={css.galleryItemImage}  src={image.webformatURL} alt="" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
