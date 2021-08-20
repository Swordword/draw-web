import * as React from 'react'

import { calculateSvg } from '@/lib/calculateSvg'

const { useState, useEffect } = React

const Layout: React.FC = ({ children }) => {
  const [currentSVG, setCurrentSVG] = useState(
    calculateSvg(document.body.clientWidth)
  )

  useEffect(() => {
    setCurrentSVG(calculateSvg(document.body.clientWidth))
  }, [window.document.body.clientWidth])
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
