function MyApp() {
    const a = [{name: "one", id: 23}, {name: "two", id: 24}, {name: "three", id: 25}];
    return (
        a.map(e => <Button name={e.name} key={e.id} k={e.id}></Button>)
    );
}

function Button(props) {
    return (
        <React.Fragment>
            <button>{props.name} {props.k}</button>
        </React.Fragment>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);