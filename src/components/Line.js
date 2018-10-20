import React from 'react'
import styled from 'styled-components'

const Dot = styled.div`
  margin-top: calc(${props => props.length} - 35px);
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${props => (props.color ? props.color : '#a31d58')};
`

const Line = styled.div`
  width: 5px;
  position: absolute;
  top: 7px;
  right: 15px;
  height: ${props => props.length};
  border-right: 5px ${props => (props.dashed ? 'dashed' : 'solid')}
    ${props => (props.color ? props.color : '#a31d58')};
`

const LineContainer = styled.div`
  margin-top: ${props => props.bottom};
  margin-top: -${props => props.top};
  margin-left: -${props => props.left};
  margin-left: ${props => props.right};
  width: 30px;
  display: flex;
  height: ${props => props.length}
  position: absolute;
  transform: rotate(${props => props.rotate}deg);
`

const validateStyleNumber = number => (!isNaN(number) ? number + 'px' : number)

export default ({
  style,
  dashed,
  length,
  rotate,
  topDot,
  bottomDot,
  top,
  left,
  right,
  bottom,
  color,
}) => {
  let _length = validateStyleNumber(length ? length : '200px')
  let _rotate = '0'
  if (rotate && rotate.includes('r')) _rotate = '-45'
  else if (rotate && rotate.includes('l')) _rotate = '45'
  return (
    <LineContainer
      style={style}
      rotate={_rotate}
      length={_length}
      top={validateStyleNumber(top ? top : '')}
      bottom={validateStyleNumber(bottom ? bottom : '')}
      left={validateStyleNumber(left ? left : '')}
      right={validateStyleNumber(right ? right : '')}
    >
      <Line length={_length} dashed={dashed} color={color} />
      <div>
        {topDot ? <Dot color={color} /> : ''}
        {bottomDot ? <Dot color={color} length={_length} /> : ''}
      </div>
    </LineContainer>
  )
}
