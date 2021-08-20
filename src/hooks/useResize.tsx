import * as React from 'react'
const { useState, useEffect } = React

export function useResize() {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  const onResize = () => {
    console.log('resize')
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return [width, onResize]
}
