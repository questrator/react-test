import React from "react";

function Books(props) {
    const order = {
        "dflt": "без сортировки",
        "ascn": "по возрастанию",
        "dscn": "по убыванию",
    };
    const [typesOrder, setTypesOrder] = React.useState(Object.keys(order));
    const [books, setBooks] = React.useState(getRows([...props.books]));
    const [type, setType] = React.useState(typesOrder[0]);

    function getRows(data) {
        return data.map(book => 
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.price}</td>
            </tr>
         );
    }

    function clickHandlerOrder(event) {
        const field = event.target.dataset.field;
        const nextType = event.target.dataset.nextType;

        setBooks(getRows(nextType === "dflt" 
        ? [...props.books]
        : [...props.books].sort((a, b) => (nextType === "ascn" ? 1 : -1) * (a[field] - b[field]))));

        setTypesOrder(typesOrder.slice(1).concat(typesOrder.at(0)));
        setType(typesOrder[1]);
        console.log(typesOrder)
        console.log(type)

    }

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {books}
                </tbody>                
            </table>
            <button data-type={type} data-next-type={typesOrder[1]} data-field="price" onClick={clickHandlerOrder}>{order[type]}</button>
        </React.Fragment>
    );
}

export default Books;