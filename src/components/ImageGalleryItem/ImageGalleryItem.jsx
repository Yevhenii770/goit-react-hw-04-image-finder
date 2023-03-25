import PropTypes from 'prop-types';

import { Img, GalleryItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ src, tags, dataSrc, onClick }) {
  return (
    <GalleryItem onClick={onClick}>
      <Img src={src} alt={tags} data-src={dataSrc} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  dataSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
