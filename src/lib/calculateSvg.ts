import { GRID_COUNT, gridGap } from '@/config'
/**
 * @description 动态生成svg
 * @param {number} width
 * @param {number} height
 */
export function calculateSvg(width: number) {
  if (!width) return ''
  const gridWidth = Number(
    parseFloat(String(width / GRID_COUNT - gridGap * 2)).toFixed(2)
  )
  const gridHeight = Number(parseFloat(String((gridWidth * 2) / 3)).toFixed(2))
  console.log('gridWidth', gridWidth)
  const drawSvg = () => {
    let str = ''
    for (let i = 0; i < GRID_COUNT; i++) {
      const rect = `
      <rect stroke="#F0F0F0" stroke-width="1" fill="none" x="${
        gridGap + i * (gridGap * 2 + gridWidth)
      }" y="${gridGap}" width="${gridWidth}" height="${gridHeight}" />`
      str += rect
    }
    return str
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${
    gridHeight + gridGap * 2
  }">
  ${drawSvg()}
</svg>`
}
