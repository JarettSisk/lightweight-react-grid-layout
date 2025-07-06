import { useState } from 'react'
import {GridContainer} from "./components/GridContainer/GridContainer.jsx";
import {GridItem} from "./components/GridItem/GridItem.jsx";
import './App.css'

function App() {
  return (
      <>
          <div>
              <h3>Grid Layout</h3>
              <GridContainer>
                  <GridItem xs={12} md={6} lg={2}>
                      <div className={"content"}>Item 1</div>
                  </GridItem>
                  <GridItem xs={12} md={6} lg={2}>
                      <div className={"content"}>Item 2</div>
                  </GridItem>
                  <GridItem xs={12} md={6} lg={2}>
                      <div className={"content"}>Item 3</div>
                  </GridItem>
              </GridContainer>

              <GridContainer>
                  <GridItem xs={12} md={8}>
                      <div className={"content"}>Large item</div>
                  </GridItem>
                  <GridItem xs={12} md={4}>
                      <div className={"content"}>Small item</div>
                  </GridItem>
              </GridContainer>

              <GridContainer>
                  <GridItem xs={6} md={3}>
                      <div className={"content"}>1</div>
                  </GridItem>
                  <GridItem xs={6} md={3}>
                      <div className={"content"}>2</div>
                  </GridItem>
                  <GridItem xs={6} md={3}>
                      <div className={"content"}>3</div>
                  </GridItem>
                  <GridItem xs={6} md={3}>
                      <div className={"content"}>4</div>
                  </GridItem>
              </GridContainer>
              <h3>Nested Grid Example</h3>
              <GridContainer padding={8}>
                  <GridItem xs={12} md={6} lg={6}>
                      <GridContainer flexDirection={"column"}>
                          <GridItem xs={12} >
                              <div className={"content"} style={{height: "100px"}}>Item 1</div>
                          </GridItem>
                          <GridItem xs={12} >
                              <div className={"content"}>Item 2</div>
                          </GridItem>
                          <GridItem xs={12} >
                              <div className={"content"}>Item 3</div>
                          </GridItem>
                      </GridContainer>
                  </GridItem>
                  <GridItem xs={12} md={6} lg={3}>
                      <div className={"content"} style={{height: "100%"}}>Item 4</div>
                  </GridItem>
                  <GridItem xs={12} md={6} lg={3}>
                      <div className={"content"} style={{height: "100%"}}>Item 5</div>
                  </GridItem>
              </GridContainer>
          </div>
      </>
  )
}

export default App
