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