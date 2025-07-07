import "./GridItem.css";

/**
 * A responsive grid item component that applies size classes based on breakpoints.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to render inside the grid item
 * @param {number} [props.xs] - Grid size for extra small screens (applies xs-{value} class)
 * @param {number} [props.sm] - Grid size for small screens (applies sm-{value} class)
 * @param {number} [props.md] - Grid size for medium screens (applies md-{value} class)
 * @param {number} [props.lg] - Grid size for large screens (applies lg-{value} class)
 * @param {number} [props.xl] - Grid size for extra large screens (applies xl-{value} class)
 * @param {string} [props.className=""] - Additional CSS classes to apply
 * @param {...Object} props.props - Additional props passed to the grid item div
 * @returns {JSX.Element} Rendered grid item with responsive classes
 */
export const GridItem = ({
                             children,
                             xs,
                             sm,
                             md,
                             lg,
                             xl,
                             className = '',
                             ...props
                         }) => {
    const classes = [
        'grid-item-flex',
        xs && `xs-${xs}`,
        sm && `sm-${sm}`,
        md && `md-${md}`,
        lg && `lg-${lg}`,
        xl && `xl-${xl}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            className={classes}
            {...props}
        >
            {children}
        </div>
    );
};