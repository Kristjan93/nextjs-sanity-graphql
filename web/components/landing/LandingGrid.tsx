import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { generateRandomColor } from '../../utils/generateRandomColor'

const Root = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  background: yellow;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

interface IGridItemProps {
  children?: React.ReactNode
  gridColumn: string
  gridRow: string
}
const GridItem = ({
  children,
  gridColumn,
  gridRow,
}:IGridItemProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        perspective: '800px',
        gridColumn,
        gridRow,
      }}
    >{children}</div>
  )
}

const BGBox = () => {
  const [bgColor, setBgColor] = useState<string | undefined>(undefined)
  useEffect(() => {
    setBgColor(generateRandomColor())
  }, [])

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: bgColor,
        transform: 'translate3d(0,0,-200px) rotateY(30deg) rotateZ(10deg)',
      }}
    >
    </div>
  )
}

export const LandingGrid = () => {
  return (
    <Root>
      <GridItem 
        gridColumn='1 / 3'
        gridRow='1 / 3'
      >
        <BGBox />
      </GridItem>
      <GridItem 
        gridColumn='3 / 5'
        gridRow='1 / 3'
      />
      <GridItem 
        gridColumn='5 / 9'
        gridRow='1 / 5'
      />
      <GridItem 
        gridColumn='1 / 5'
        gridRow='3 / 6'
      />
      <GridItem 
        gridColumn='1 / 2'
        gridRow='6 / 7'
      />
      <GridItem 
        gridColumn='2 / 3'
        gridRow='6 / 7'
      />
      <GridItem 
        gridColumn='3 / 4'
        gridRow='6 / 7'
      />
      <GridItem 
        gridColumn='4 / 5'
        gridRow='6 / 7'
      />
      <GridItem 
        gridColumn='5 / 9'
        gridRow='5 / 7'
      />
    </Root>
  )
}