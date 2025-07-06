import "./GridItem.css";

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
        'grid-item',
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
