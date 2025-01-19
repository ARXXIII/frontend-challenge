'use client'

import { useCallback } from "react"
import { RootState } from "@/app/lib/store/store"
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, removeFromFavorites } from "@/app/lib/store/favorite-slice"

import { FaHeart, FaRegHeart } from "react-icons/fa"

interface ImageType {
    id: string,
    url: string,
    width: number,
    height: number
}

type FavoriteButtonProps = {
    image: ImageType
}

export const FavoriteButton = ({ image }: FavoriteButtonProps) => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: RootState) => state.favorites.images)
    const isFavorite = favorites.some((favImage) => favImage.id === image.id)

    // Функция добавление картинки в избранное
    const handleAddToFavorites = useCallback(() => {
        dispatch(addToFavorites(image))
    }, [dispatch, image])

    // Функция удаления картинки из избранного
    const handleRemoveFromFavorites = useCallback(() => {
        dispatch(removeFromFavorites(image.id))
    }, [dispatch, image.id])

    return (
        <div>
            <button
                type="button"
                onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
                className="absolute right-3 bottom-3 p-2 rounded-full bg-white lg:bg-transparent lg:hover:bg-white transition-colors"
            >
                {isFavorite ? <FaHeart className="size-5 text-[#F24E1E]" /> : <FaRegHeart className="size-5 text-[#F24E1E]" />}
            </button>
        </div>

    )
}