import "./GridContainer.css";

export const GridContainer = (props) => {
    const {
        children,
        className = "",
        gap = "8px",
        justifyContent = "center",
        alignItems = "stretch",
        flexDirection = "row",
        padding = "0",
        ...otherProps
    } = props;


    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        border: "1px solid black",
        borderRadius: 5,
        backgroundColor: "#f3eefd",
        gap,
        '--grid-gap': gap,
        justifyContent,
        alignItems,
        flexDirection,
        padding,
    };

    return (
        <div
            style={containerStyle}
            className={`grid-container ${className}`}
            {...otherProps}
        >
            {children}
        </div>
    );
};