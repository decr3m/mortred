import Button from "./components/Button";

export default function App() {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);

    return (
        <Panel>
            <Label text={`Count ${count}`} />
            <Button
                onactivate={increment}
                text={`Click Me`}
                sx={{ marginTop: "100px", marginLeft: "100px" }}
            />
        </Panel>
    );
}
