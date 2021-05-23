function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);

    return (
        <Panel>
            <Label text={`Count ${count}`} />
            <TextButton
                style={{
                    marginTop: "100px",
                    marginLeft: "100px",
                    backgroundColor: "yellow",
                }}
                onactivate={increment}
                text={`Click Me`}
            />
        </Panel>
    );
    // return React.createElement(
    //     "Panel",
    //     {
    //         style: {},
    //     },
    //     React.createElement("Label", { text: `Count: ${count}` }),
    //     React.createElement("TextButton", {
    //         className: "ButtonBevel",
    //         text: "Increm1en2t",
    //         onactivate: increment,
    //     })
    // );
}

ReactPanorama.render(React.createElement(Counter), $.GetContextPanel());
$.Msg(Object.keys(ReactPanorama));
