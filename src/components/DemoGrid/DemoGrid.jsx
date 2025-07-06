import {GridContainer} from "../GridContainer/GridContainer.jsx";
import {GridItem} from "../GridItem/GridItem.jsx";
import "./DemoGrid.css"

export const DemoGrid = (props) => {

    return (
        <div className={"demo-grid"}>
            <h3>Basic Grid</h3>
            <GridContainer padding={8}>
                <GridItem xs={8}>
                    <div className={"content"}>1</div>
                </GridItem>
                <GridItem xs={4}>
                    <div className={"content"}>2</div>
                </GridItem>
                <GridItem xs={4}>
                    <div className={"content"}>3</div>
                </GridItem>
                <GridItem xs={8}>
                    <div className={"content"}>3</div>
                </GridItem>
            </GridContainer>
            <div className={"spacer"}/>
            <h3>Making use of multiple breakpoints (xs, sm, md, etc...)</h3>
            <GridContainer padding={8}>
                <GridItem xs={12} md={8}>
                    <div className={"content"}>1</div>
                </GridItem>
                <GridItem xs={12} md={4}>
                    <div className={"content"}>2</div>
                </GridItem>
            </GridContainer>
            <br/>
            <GridContainer padding={8}>
                <GridItem xs={12} sm={6} lg={3}>
                    <div className={"content"}>1</div>
                </GridItem>
                <GridItem xs={12} sm={6} lg={3}>
                    <div className={"content"}>2</div>
                </GridItem>
                <GridItem xs={12} sm={6} lg={3}>
                    <div className={"content"}>3</div>
                </GridItem>
                <GridItem xs={12} sm={6} lg={3}>
                    <div className={"content"}>4</div>
                </GridItem>
            </GridContainer>
            <div className={"spacer"}/>
            <h3>Nested Grid Example</h3>
            <GridContainer padding={8}>
                <GridItem xs={12} md={6} lg={6}>
                    <GridContainer>
                        <GridItem xs={12}>
                            <div className={"content"}>1</div>
                        </GridItem>
                        <GridItem xs={12}>
                            <div className={"content"}>2</div>
                        </GridItem>
                        <GridItem xs={12}>
                            <div className={"content"}>3</div>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12} md={3} lg={3}>
                    <div className={"content"} style={{height: "100%"}}>4</div>
                </GridItem>
                <GridItem xs={12} md={3} lg={3}>
                    <div className={"content"} style={{height: "100%"}}>5</div>
                </GridItem>
            </GridContainer>
            <div className={"spacer"}/>
            <h3>Adjustable grid gap</h3>
            {/* maybe add in seperate props for col / row gap later on */}
            {/* Also currently have to pass string representaion IE "8px" in order to work. Cant take nums like 8*/}
            <GridContainer gap={"40px"} padding={8}>
                <GridItem xs={12} md={3}>
                    <div className={"content"}>1</div>
                </GridItem>
                <GridItem xs={12} md={3}>
                    <div className={"content"}>2</div>
                </GridItem>
                <GridItem xs={12} md={3}>
                    <div className={"content"}>3</div>
                </GridItem>
                <GridItem xs={12} md={3}>
                    <div className={"content"}>4</div>
                </GridItem>
            </GridContainer>
            <div className={"spacer"}/>
            <h3>Alignment</h3>
            <GridContainer padding={8} justifyContent={"end"}>
                <GridItem xs={12} md={2}>
                    <div className={"content"}>1</div>
                </GridItem>
                <GridItem xs={2}>
                    <div className={"content"}>2</div>
                </GridItem>
                <GridItem xs={12} md={2}>
                    <div className={"content"}>3</div>
                </GridItem>
                <GridItem xs={2}>
                    <div className={"content"}>4</div>
                </GridItem>
            </GridContainer>
        </div>
    )
}