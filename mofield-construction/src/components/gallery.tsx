"use client"; //use in client bundle only
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const photos = [
  {
    src: "/directionalDrillingCardSmall.jpg",
    width: 800,
    height: 600,
    srcSet: [
      { src: "/directionalDrillingCardSmall.jpg", width: 400, height: 300 },
      { src: "/directionalDrillingCardSmall.jpg", width: 200, height: 150 },
    ],
  },
  {
    src: "/excavationCardSmall.jpg",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "/excavationCardSmall.jpg", width: 800, height: 450 },
      { src: "/excavationCardSmall.jpg", width: 400, height: 225 },
    ],
  },
  {
    src: "/truckCardSmall.jpg",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "/truckCardSmall.jpg", width: 800, height: 450 },
      { src: "/truckCardSmall.jpg", width: 400, height: 225 },
    ],
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
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
          src: photo.src,
          width: photo.width,
          height: photo.height,
        }))}
      />
    </>
  );
};

export default Gallery;