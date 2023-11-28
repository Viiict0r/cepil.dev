'use client'

import { useEffect } from 'react'

export const PointerPos = () => {
  useEffect(() => {
    function onPointerMove({ x, y }: PointerEvent) {
      document.documentElement.style.setProperty('--x', `${x}`)
      document.documentElement.style.setProperty('--y', `${y}`)
    }

    document.body.addEventListener('pointermove', onPointerMove)

    return () => {
      document.body.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return null
}
