import Image from "next/image"

import { FavoriteButton } from "./favorite-button"

interface ImageType {
    id: string,
    url: string,
    width: number,
    height: number
}


type GalleryItemProps = {
    image: ImageType
}

export const GalleryItem = ({ image }: GalleryItemProps) => {
    return (
        <div className="relative lg:hover:scale-110 transition-transform">
            <Image
                loader={() => image.url || ''}
                src={image.url}
                alt={image.id}
                width={image.width}
                height={image.height}
                className="w-svw sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 object-cover"
            />
            <FavoriteButton image={image} />
        </div>
    )
}