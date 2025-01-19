'use client'

import { useSelector } from "react-redux"
import { RootState } from "../lib/store/store"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

const FavoritePage = () => {
    const favorites = useSelector((state: RootState) => state.favorites.images)

    return (
        !!favorites.length === false
            ? <h1 className="text-center font-bold lg:text-3xl">Любимых котиков нет(</h1>
            : <article className='lg:px-16'>
                <GalleryGrid images={favorites} />
            </article>
    )
}

export default FavoritePage