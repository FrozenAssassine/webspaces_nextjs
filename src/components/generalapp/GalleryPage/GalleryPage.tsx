import { ImageGrid } from "../ImageGrid/ImageGrid";
import ImageModal from "../ImageModal/ImageModal";
import styles from "./GalleryPage.module.scss";
import React, { useState, useEffect  } from 'react';

type Props = {
    images: string[]
}

export default function GalleryPage(props: Props) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleScroll = (scroll: boolean) => {
        document.body.style.overflowY = scroll ? "unset" : "hidden" ;
    };

    const handleImageClick = (index: number) => {
      setSelectedImageIndex(index);
      handleScroll(false);
    }
  
    const closeModal = () => {
      setSelectedImageIndex(null);
      handleScroll(true);
    };

    return (
        <div className={styles.gallerypage}>
            <div className={`${styles.headline} textanimation`}>Gallery</div>
            <ImageGrid images={props.images} onImageClick={handleImageClick} />
            {selectedImageIndex !== null && (
                <ImageModal
                selectedImage={props.images[selectedImageIndex]}
                onClose={closeModal}
                />
            )}
        </div>
    );
}
