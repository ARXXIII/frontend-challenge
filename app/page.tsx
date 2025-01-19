'use client'

import { useEffect, useRef } from "react"
import { fetchCats } from "./lib/store/cats-slice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./lib/store/store"

import { GalleryGrid } from "@/components/gallery/gallery-grid"

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const cats = useSelector((state: RootState) => state.cats.images)
    const isLoading = useSelector((state: RootState) => state.cats.loading)
    const error = useSelector((state: RootState) => state.cats.error)

    const observer = useRef<IntersectionObserver | null>(null)
    const loadMoreTriggerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!!cats.length === false) {
            dispatch(fetchCats())
        }
    }, [dispatch, cats.length])

    useEffect(() => {
        if (!isLoading) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            };

            const callback = (entries: IntersectionObserverEntry[]) => {
                if (entries[0].isIntersecting) {
                    dispatch(fetchCats())
                }
            };

            observer.current = new IntersectionObserver(callback, options)
        }

        if (loadMoreTriggerRef.current && observer.current) {
            observer.current.observe(loadMoreTriggerRef.current)
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect()
            }
        }
    }, [dispatch, isLoading])

    if (error) {
        return <h1 className="text-center font-bold lg:text-3xl">Ошибка: {error}</h1>
    }

    return (
        <article className="space-y-12 lg:px-16">
            <GalleryGrid images={cats} />
            <div>
                <div ref={loadMoreTriggerRef} className="load-more-trigger" />
                {isLoading && <p className="text-center text-sm">... загружаем еще котиков ...</p>}
            </div>
        </article>
    )
}

export default HomePage