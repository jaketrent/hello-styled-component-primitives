import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

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
  </div>

ReactDOM.render(<App />, document.getElementById('app'))
