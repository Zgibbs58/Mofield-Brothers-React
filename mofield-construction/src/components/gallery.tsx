"use client"; //use in client bundle only
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Gallery = ({photos}: {photos: any[]}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={300}
        onClick={({ index }) => {
          setSelectedIndex(index);
          setLightboxOpen(true);
        }}
      />

      <Lightbox
        open={lightboxOpen}
        index={selectedIndex}
        close={() => setLightboxOpen(false)}
        plugins={[Fullscreen, Zoom]}
        slides={photos.map((photo) => ({
          src: photo.largeSrc,
          width: 1600,
          height: 900,
        }))}
      />
    </>
  );
};

export default Gallery;