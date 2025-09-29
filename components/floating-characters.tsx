"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function FloatingCharacters() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const characters = [
    {
      src: "/images/bot-character-1.png",
      alt: "Bot character 1",
      className: "top-[15%] left-[5%] w-12 md:w-16",
      delay: 0,
      speed: 0.5,
    },
    {
      src: "/images/bot-character-2.png",
      alt: "Bot character 2",
      className: "top-[40%] right-[5%] w-14 md:w-20",
      delay: 1,
      speed: 0.7,
    },
    {
      src: "/images/bot-character-3.png",
      alt: "Bot character 3",
      className: "top-[65%] left-[8%] w-10 md:w-14",
      delay: 2,
      speed: 0.6,
    },
    {
      src: "/images/bot-character-2.png",
      alt: "Bot character 4",
      className: "top-[85%] right-[7%] w-12 md:w-16",
      delay: 1.5,
      speed: 0.8,
    },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {characters.map((character, index) => {
        const parallaxY = scrollY * character.speed * 0.1
        const opacity = Math.max(0.3, 1 - (scrollY / 1000) * index * 0.2)

        return (
          <div
            key={index}
            className={`absolute ${character.className} transition-opacity duration-300`}
            style={{
              transform: `translateY(${parallaxY}px)`,
              opacity: opacity,
              animation: `float ${3 + character.delay}s ease-in-out infinite`,
              animationDelay: `${character.delay}s`,
            }}
          >
            <Image
              src={character.src || "/placeholder.svg"}
              alt={character.alt}
              width={120}
              height={120}
              className="w-full h-auto drop-shadow-lg"
              priority={index === 0}
            />
          </div>
        )
      })}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  )
}
