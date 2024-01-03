import { useState } from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Gallery({ 
    images,
    controls = 'internal' // internal || external
}) {
    const [currentImage, setCurrentImage] = useState(0)

    function prevImage () {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1)
        }
    }

    function nextImage () {
        if (currentImage !== images.length-1) {
            setCurrentImage(currentImage + 1)
        }
    }

    return (
        <div className={s.rootInternal}>
            { 
                currentImage > 0 && (
                    <div onClick={prevImage} className={controls === 'internal' ? s.prevArrowInternal : s.prevArrowExternal}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                ) 
            }

            <img className={s.image} src={ images[currentImage] } alt='' />

            {
                currentImage !== images.length-1 && (
                    <div onClick={nextImage} className={controls === 'internal' ? s.nextArrowInternal : s.nextArrowExternal}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                )
            }

        </div>
    )
}
