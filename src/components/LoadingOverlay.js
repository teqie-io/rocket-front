import { Spin } from "antd"
import * as React from "react"
import styled from "styled-components"

const OverLay = styled.div`
  position: inherit;
  z-index: 204800;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

export default class LoadingOverlay extends React.Component {
   render() {
    return (
      <OverLay id="loader">
        <Spin
          tip={this.props.loading.tip ? this.props.loading.tip : "Loading..."}
          size="large"
        />
      </OverLay>
    )
  }
}
