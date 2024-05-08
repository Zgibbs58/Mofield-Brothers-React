"use client"; //use in client bundle only
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { motion } from "framer-motion";

const Gallery = ({photos}: {photos: any[]}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <motion.div
    initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}>
      <PhotoAlbum
        photos={photos}
        sizes={{
          size: "992px",
          sizes: [
          { viewport: "(max-width: 767px)", size: "calc(100vw - 32px)" },
          { viewport: "(max-width: 1279px)", size: "calc(100vw - 288px)" },
          ],
        }}
        breakpoints={[500, 700, 1200]}
        layout="columns"
        rowConstraints={{minPhotos: 2, maxPhotos: 4}}
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
    </motion.div>
  );
};

export default Gallery;