

// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// // import css from './ImageGallery.module.css';
// // import Modal from '../Modal/Modal';
// // import { nanoid } from 'nanoid';


// // const ImageGallery = ({ images, onItemClick }) => {
// //   return (
// //     <ul className={css.gallery}>
// //       {images.map((image) => (
// //         <ImageGalleryItem key={image.id} image={image} onClick={onItemClick} />
// //       ))}
// //     </ul>
// //   );
// // };

// // ImageGallery.propTypes = {
// //   images: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.number.isRequired,
// //       webformatURL: PropTypes.string.isRequired,
// //       largeImageURL: PropTypes.string.isRequired,
// //     })
// //   ).isRequired,
// //   onItemClick: PropTypes.func.isRequired,
// // };

// // export default ImageGallery;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import css from './ImageGallery.module.css';
// import Modal from '../Modal/Modal';
// import { nanoid } from 'nanoid';

// const ImageGallery = ({ images, onItemClick }) => {
//   const [modalImage, setModalImage] = useState('');

//   const handleImageClick = (imageUrl) => {
//     setModalImage(imageUrl);
//   };

//   const handleCloseModal = () => {
//     setModalImage('');
//   };

//   return (
//     <div>
//       <ul className={css.gallery}>
//         {images.map((image) => (
//           <ImageGalleryItem key={nanoid()} image={image} onClick={handleImageClick} />
//         ))}
//       </ul>
//       <Modal isOpen={modalImage !== ''} image={modalImage} onClose={handleCloseModal} />
//     </div>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onItemClick: PropTypes.func.isRequired,
// };

// export default ImageGallery;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import Modal from '../Modal/Modal';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, onItemClick }) => {
  const [modalImage, setModalImage] = useState('');

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const handleCloseModal = () => {
    setModalImage('');
  };

  const convertedImages = images.map((image) => ({
    ...image,
    id: String(image.id),
  }));

  return (
    <div>
      <ul className={css.gallery}>
        {convertedImages.map((image) => (
          <ImageGalleryItem key={nanoid()} image={image} onClick={handleImageClick} />
        ))}
      </ul>
      <Modal isOpen={modalImage !== ''} image={modalImage} onClose={handleCloseModal} />
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
