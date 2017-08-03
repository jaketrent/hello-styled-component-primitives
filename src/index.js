import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import primitives from 'styled-components/primitives'

const Txt = primitives.Text`
  color: red
  margin-left: 12px;
  padding: 8px;
  border-left-color: red;
  border-left-style: solid;
  border-left-width: 1
`

const Div = styled.div`
  display: inline-block;
  margin: 7px 1px;
  padding: 2px;
  color: ${props => props.color};
`

const CoolerDiv = Div.extend`
  background: purple;
`

const App = _ =>
  <div>
    <Div color="purple">Styled</Div>
    <CoolerDiv color="white">Components</CoolerDiv>
    <Txt>Primitives</Txt>
  </div>

ReactDOM.render(<App />, document.getElementById('app'))
