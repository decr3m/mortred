export default function Button({ text, sx = {}, ...rest }) {
    const [state, setState] = React.useState({
        hovered: false,
    });

    const handleOnHovered = React.useCallback(() => {
        setState((oldState) => ({ ...oldState, hovered: !oldState.hovered }));
    }, []);

    return (
        <TextButton
            style={{
                backgroundColor: state.hovered ? "blue" : "yellow",
                padding: "20px",
                fontSize: "20",
                ...sx,
            }}
            {...rest}
            text={text}
            onmouseover={handleOnHovered}
            onmouseout={handleOnHovered}
        />
    );
}
