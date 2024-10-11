import React from 'react'
import galleryImage1 from "../assets/images/gallery5.png";
import galleryImage2 from "../assets/images/gallery2.png";
import galleryImage3 from "../assets/images/gallery3.png";
import galleryImage4 from "../assets/images/gallery4.png";

const Gallery = () => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 max-w-full md:max-w-full place-items-center md:pt-8 pt-3">

                {GalleryItems.map((items, index) => (
                    <div key={index} className="overflow-hidden w-full">
                        <img className="hover:opacity-75 hover:scale-125 transition-all duration-300" src={items.imge} alt='image' />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery

const GalleryItems = [
    {
        imge: galleryImage1,
    },
    {
        imge: galleryImage2,
    },
    {
        imge: galleryImage3,
    },
    {
        imge: galleryImage4,
    },
    
]