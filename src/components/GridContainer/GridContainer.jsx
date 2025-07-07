import "./GridContainer.css";

/**
 * A flexible grid container component that wraps children in a responsive flexbox layout.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to render inside the container
 * @param {string} [props.className=""] - Additional CSS classes to apply
 * @param {string} [props.gap="8px"] - Gap between grid items (CSS gap value)
 * @param {string} [props.justifyContent="center"] - Flex justify-content alignment
 * @param {string} [props.alignItems="stretch"] - Flex align-items alignment
 * @param {string} [props.flexDirection="row"] - Flex direction of the container
 * @param {string} [props.padding="0"] - Padding inside the container
 * @param {...Object} props.otherProps - Additional props passed to the container div
 * @returns {JSX.Element} Rendered grid container
 */
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
        height: "100%",
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