"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce">
      <ChevronDown className="h-8 w-8 text-primary" strokeWidth={2} />
    </div>
  )
}
