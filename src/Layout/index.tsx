import * as React from 'react'

import { calculateSvg } from '@/lib/calculateSvg'

const { useState, useEffect, useRef } = React

const Layout: React.FC = ({ children }) => {
  const clientWidthRef = useRef(document.body.clientWidth)
  const [currentSVG, setCurrentSVG] = useState(
    calculateSvg(clientWidthRef.current)
  )
  useEffect(() => {
    console.log('fn calculateSvg')
    setCurrentSVG(calculateSvg(clientWidthRef.current))
  }, [clientWidthRef.current])
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(data:image/svg+xml;utf8,${encodeURIComponent(
          currentSVG
        )})`,
        backgroundSize: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default Layout
