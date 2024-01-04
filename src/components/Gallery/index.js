import { useState } from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Gallery({
    images
}) {

    const [currentImage, setCurrentImage] = useState(0)

    function onPrevArrow () {
        setCurrentImage(currentImage - 1)
    }

    function onNextArrow () {
        setCurrentImage(currentImage + 1)
    }

    return (
        <div className={s.root}>
            {
                currentImage > 0 && (
                    <div className={s.prevArrow} onClick={onPrevArrow}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                )
            }

            <img className={s.image} src={ images[currentImage] } alt='' />

            {
                currentImage !== images.length - 1 && (
                    <div className={s.nextArrow} onClick={onNextArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                )
            }

        </div>
    )
}
