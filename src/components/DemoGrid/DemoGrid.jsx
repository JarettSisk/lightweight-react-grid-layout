import {GridContainer} from "../GridContainer/GridContainer.jsx";
import {GridItem} from "../GridItem/GridItem.jsx";
import "./DemoGrid.css"
import {useState} from "react";

/**
 * A demo component showcasing various grid layout examples and configurations.
 * @param {Object} props - Component props
 * @returns {JSX.Element} Rendered demo grid with interactive examples
 */
export const DemoGrid = (props) => {

    const [alignment, setAlignment] = useState("center");

    /**
     * Handles alignment change from radio button selection
     * @param {Event} e - Change event from radio input
     */
    const handleChangeAlignment = (e) => {
        setAlignment(e.target.value);
    }

    return (
        <div className={"demo-grid"}>
            <h3>Basic Grid</h3>
            <GridContainer padding={8} alignItems={"center"}>
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
                    <p className={"content"}>3</p>
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
            <div className={"button-group"}>
                <label>
                    <input
                        className={"radio-button-input"}
                        type="radio"
                        name="alignment"
                        value="flex-start"
                        checked={alignment === "flex-start"}
                        onChange={handleChangeAlignment}
                    />
                    Start
                </label>
                <label style={{marginLeft: "16px"}}>
                    <input
                        className={"radio-button-input"}
                        type="radio"
                        name="alignment"
                        value="center"
                        checked={alignment === "center"}
                        onChange={handleChangeAlignment}
                    />
                    Center
                </label>
                <label style={{marginLeft: "16px"}}>
                    <input
                        className={"radio-button-input"}
                        type="radio"
                        name="alignment"
                        value="flex-end"
                        checked={alignment === "flex-end"}
                        onChange={handleChangeAlignment}
                    />
                    End
                </label>
                <label style={{marginLeft: "16px"}}>
                    <input
                        className={"radio-button-input"}
                        type="radio"
                        name="alignment"
                        value="space-between"
                        checked={alignment === "space-between"}
                        onChange={handleChangeAlignment}
                    />
                    Space Between
                </label>
                <label style={{marginLeft: "16px"}}>
                    <input
                        className={"radio-button-input"}
                        type="radio"
                        name="alignment"
                        value="space-around"
                        checked={alignment === "space-around"}
                        onChange={handleChangeAlignment}
                    />
                    Space Around
                </label>
                <label style={{marginLeft: "16px"}}>
                    <input
                        className={"radio-button-input"}
                        type="radio"
                        name="alignment"
                        value="space-evenly"
                        checked={alignment === "space-evenly"}
                        onChange={handleChangeAlignment}
                    />
                    Space Evenly
                </label>
            </div>
            <GridContainer padding={8} justifyContent={alignment}>
                <GridItem xs={4} md={2}>
                    <div className={"content"}>1</div>
                </GridItem>
                <GridItem xs={4} md={2}>
                    <div className={"content"}>2</div>
                </GridItem>
                <GridItem xs={4} md={2}>
                    <div className={"content"}>3</div>
                </GridItem>
                <GridItem xs={4} md={2}>
                    <div className={"content"}>4</div>
                </GridItem>
            </GridContainer>
            <div className={"spacer"}/>
            <h3>Images</h3>
            <GridContainer padding={8}>
                <GridItem xs={12} md={6} lg={3}>
                    <img src={"./public/images/vika-strawberrika-NFvN4Sx3-VQ-unsplash (1).jpg"}/>
                </GridItem>
                <GridItem xs={12} md={6} lg={3}>
                    <img src={"./public/images/vika-strawberrika-NFvN4Sx3-VQ-unsplash (1).jpg"}/>
                </GridItem>
                <GridItem xs={12} md={6} lg={3}>
                    <img src={"./public/images/vika-strawberrika-NFvN4Sx3-VQ-unsplash (1).jpg"}/>
                </GridItem>
                <GridItem xs={12} md={6} lg={3}>
                    <img src={"./public/images/vika-strawberrika-NFvN4Sx3-VQ-unsplash (1).jpg"}/>
                </GridItem>
            </GridContainer>
            <div className={"spacer"}/>
            <h3>Cards</h3>
            <GridContainer padding={8}>
                <GridItem xs={12} md={4}>
                    <GridContainer flexDirection={"column"} alignItems={"center"}>
                        <GridItem xs={12}>
                            <img src={"./public/images/vika-strawberrika-NFvN4Sx3-VQ-unsplash (1).jpg"}/>
                        </GridItem>
                        <GridItem style={{flex: 1}} xs={12}>
                            <div className={"content"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit
                                    in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.</p>
                            </div>
                        </GridItem>
                        <GridItem xs={12}>
                            <div className={"content"}>
                                <button>Click</button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12} md={4}>
                    <GridContainer flexDirection={"column"} alignItems={"center"}>
                        <GridItem xs={12}>
                            <img src={"./public/images/vika-strawberrika-NFvN4Sx3-VQ-unsplash (1).jpg"}/>
                        </GridItem>
                        <GridItem xs={12} style={{flex: 1}}>
                            <div className={"content"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco..</p>
                            </div>
                        </GridItem>
                        <GridItem xs={12}>
                            <div className={"content"}>
                                <button>Click</button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12} md={4}>
                    <GridContainer flexDirection={"column"} alignItems={"center"}>
                        <GridItem xs={12}>
                            <img src={"./public/images/vika-strawberrika-NFvN4Sx3-VQ-unsplash (1).jpg"}/>
                        </GridItem>
                        <GridItem xs={12} style={{flex: 1}}>
                            <div className={"content"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit
                                    in.</p>
                            </div>
                        </GridItem>
                        <GridItem xs={12}>
                            <div className={"content"}>
                                <button>Click</button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </div>
    )
}