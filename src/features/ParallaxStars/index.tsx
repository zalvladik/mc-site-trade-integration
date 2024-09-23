import './ParallaxStars.css'

import { useEffect } from 'react'

const random = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const generateMultipleBoxShadow = (
  n: number,
  // width: number,
  // height: number,
): string => {
  let shadows = `${random(3000)}px ${random(2000)}px #0eafe0`

  for (let i = 2; i <= n; i += 1) {
    shadows += `, ${random(3000)}px ${random(2000)}px #0eafe0`
  }

  return shadows
}

const ParallaxStars = (): JSX.Element => {
  // const [parallaxWidth, setParallaxWidth] = useState(window.innerWidth)
  // const [parallaxHeight, setParallaxHeight] = useState(window.innerHeight)

  useEffect(() => {
    // const updateParallaxDimensions = (): void => {
    //   setParallaxWidth(window.innerWidth)
    //   setParallaxHeight(window.innerHeight)
    // }

    const updateShadows = (): void => {
      document.documentElement.style.setProperty(
        '--shadows-small',
        generateMultipleBoxShadow(700),
      )
      document.documentElement.style.setProperty(
        '--shadows-medium',
        generateMultipleBoxShadow(200),
      )
      document.documentElement.style.setProperty(
        '--shadows-big',
        generateMultipleBoxShadow(100),
      )
    }

    // window.addEventListener('resize', updateParallaxDimensions)

    // Initial shadow generation
    updateShadows()

    // return () => {
    //   window.removeEventListener('resize', updateParallaxDimensions)
    // }
  }, [])

  return (
    <div>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  )
}

export default ParallaxStars
