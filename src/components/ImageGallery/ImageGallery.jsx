// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import css from './ImageGallery.module.css';

// class ImageGallery extends Component {
//   render() {
//     const { images, onItemClick } = this.props;

//     return (
//       <ul className={css.gallery}>
//         {images.map((image) => (
//           <ImageGalleryItem key={image.id} image={image} onClick={onItemClick} />
//         ))}
//       </ul>
//     );
//   }
// }

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onItemClick: PropTypes.func.isRequired,
// };

// export default ImageGallery;
// src/components/ImageGallery/ImageGallery.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { images, onItemClick } = this.props;

    return (
      <ul className={css.gallery}>
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} onClick={onItemClick} />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
