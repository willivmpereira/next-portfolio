import { useEffect, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import cn from 'classnames';
import { GalleryItemContent } from "./styles";
import Link from 'next/link'

interface GalleryProps {
    title: string;
    description: string;
    type: string;
    imgUrl: string;
    slug: string;
}


export const GalleryItems = ({ imgUrl, title, index, type, slug, updateActiveImage}): any => {

    const ref = useRef(null);

    const onScreen = useOnScreen(ref, 0.5);

    useEffect(() => {
        if (onScreen) {
          updateActiveImage(index);
        }
      }, [onScreen, index]);

    return (
        <GalleryItemContent imgUrl={imgUrl}>
            <div className={cn("gallery-item-wrapper", { "is-reveal": onScreen })} ref={ref} >
            <div/>
            <div className='gallery-item'>
                <div className='gallery-item-info'>
                    <h1 className='gallery-item-title'>
                        <Link href={`/projects/${slug}`}>
                            <a>{title}</a>
                        </Link>
                    </h1>
                    {/* <h6 className='gallery-item-subtitle'>{description}</h6> */}
                    <p className='gallery-item-subtitle'>{type}</p>
                </div>
                <div className='gallery-item-image'></div>
            </div>
            <div />
        </div>
        </GalleryItemContent>
    )
}