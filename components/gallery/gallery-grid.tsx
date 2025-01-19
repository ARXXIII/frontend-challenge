import { GalleryItem } from "./gallery-item"

interface ImageType {
    id: string,
    url: string,
    width: number,
    height: number
}

type GalleryGridProps = {
    images: ImageType[]
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
    return (
        <div className="flex flex-wrap gap-4 lg:gap-12">

            {images.map((image) => (
                <GalleryItem
                    key={image.id}
                    image={image}
                />
            ))}

        </div>
    )
} 