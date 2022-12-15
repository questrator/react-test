function MyApp() {
    
    return (
        <React.Fragment>
            <Button />
        </React.Fragment>
    );
}

function Button(props) {
    const [value, setValue] = React.useState("off");
    function toggleValue() {
        setValue(v => v === "on" ? "off" : "on");
    }
    return (
        <button onClick={toggleValue}>{value}</button>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);