'use client'

import clsx from "clsx"
import Link from "next/link"

import { usePathname } from "next/navigation"

import { routes } from "@/constants"

export const Nav = () => {
    const pathname = usePathname()

    return (
        <nav className="flex items-center lg:px-16 text-white text-sm">

            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    title={route.title}
                    className={clsx("flex justify-center items-center px-3 h-8 lg:h-16 text-nowrap transition-colors",
                        pathname === route.href && 'bg-[#1E88E5]'
                    )}
                >
                    {route.title}
                </Link>
            ))}

        </nav>
    )
}