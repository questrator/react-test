function MyApp() {
    
    return (
        <React.Fragment>
            <Button />
        </React.Fragment>
    );
}

function Button(props) {
<<<<<<< HEAD
    let [name, nameState] = React.useState(1);

    function setName() {
        nameState((value) => ++value);
=======
    const [value, setValue] = React.useState("off");
    function toggleValue() {
        setValue(v => v === "on" ? "off" : "on");
>>>>>>> 707de061e1c51dc7d13d15ae1510b7102c60740f
    }
    return (
        <button onClick={toggleValue}>{value}</button>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);