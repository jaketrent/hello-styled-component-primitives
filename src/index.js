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

const Button = primitives.Touchable({})

const ButtonTxt = primitives.Text`
  color: orange;
  border-color: orange;
  border-style: solid;
  border-width: 1;
  padding: 8px;
  border-radius: 4px;
`

const WebDiv = styled.div`
  display: inline-block;
  margin: 7px 1px;
  padding: 2px;
  color: ${props => props.color};
`

const CoolerWebDiv = WebDiv.extend`
  background: purple;
`

const App = _ =>
  <div>
    <WebDiv color="purple">Styled</WebDiv>
    <CoolerWebDiv color="white">Components</CoolerWebDiv>
    <Txt>Primitives</Txt>
    <Button onPressIn={console.log}><ButtonTxt>Boop!</ButtonTxt></Button>
  </div>

ReactDOM.render(<App />, document.getElementById('app'))
