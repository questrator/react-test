function MyApp() {
    
    return (
        <Button name={"name"} key={1}></Button>
    );
}



function Button(props) {
    let [name, nameState] = React.useState(1);

    function setName() {
        nameState((value) => ++value);
    }

    return (
        <button onClick={setName}>{name}</button>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);