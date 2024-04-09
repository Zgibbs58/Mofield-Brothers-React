import React from 'react'
import Gallery from '../../components/Gallery'
import photos from '../../components/galleryPhotos'

const GalleryPage = () => {
  return (
    <div className="px-6 md:px-12">
      <Gallery photos={photos}/>
    </div>
  )
}

export default GalleryPage
