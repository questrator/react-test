import React, { useEffect } from "react";

function Books(props) {
    const ipp = 3;
    const order = {
        "dflt": "без сортировки",
        "ascn": "по возрастанию",
        "dscn": "по убыванию",
    };
    let [currentPage, setCurrentPage] = React.useState(1);
    const [pagination, setPagination] = React.useState(getPagination(props.books));

    function chunk(list, n) {
        const chunks = [];
        for (let i = 0; i < list.length; i += n) {
            chunks.push(list.slice(i, i + n));
        }
        return chunks;
    }

    function clickPageHandler(event) {
        setCurrentPage(() => Number(event.target.dataset.page));
        console.log("change=>", currentPage);
        setPagination(getPagination(props.books));
    }

    function getPagination(list) {
        const pages = chunk(list, ipp).map((e, i) => {
            const current = i + 1 === currentPage ? true : false;
            return <span className="page" onClick={clickPageHandler} key={i + 1} data-page={i + 1} data-current={current}>{i + 1}</span>
        });
        return pages;
    }

    // useEffect(() => {
    //     const pages = chunk(props.books, ipp).map((e, i) => {
    //         <span key={i + 1} data-page={i + 1}>{i + 1}</span>
    //     });
    //     setPages(pages);
    // }, []);
    // console.log(pages)

    // const [typesOrder, setTypesOrder] = React.useState(Object.keys(order));
    // const [currentPage, setCurrentPage] = React.useState(1);
    // const [books, setBooks] = React.useState(getList([...props.books], currentPage));
    // const [type, setType] = React.useState(typesOrder[0]);
    // const [pages, setPages] = React.useState(getPages([...props.books]));
    // console.log(pages)
    // function getList(data, page) {
    //     return chunk(data, ipp)[page].map(book => 
    //         <tr key={book.id}>
    //             <td>{book.id}</td>
    //             <td>{book.name}</td>
    //             <td>{book.price}</td>
    //         </tr>
    //      );
    // }

    // function getPages(data) {        
    //     return chunk(data, ipp).map((e, i) => <span onClick={clickHandlerPage} key={i + 1} data-page={i + 1} data-current={i + 1 === currentPage}> {i + 1} </span>);
    // }    

    // function chunk(list, n) {
    //     const chunks = [];
    //     for (let i = 0; i < list.length; i += n) {
    //         chunks.push(list.slice(i, i + n));
    //     }
    //     return chunks;
    // }

    // function clickHandlerPage(event) {        
    //     setCurrentPage(event.target.dataset.page);
    //     setBooks(getList([...props.books], currentPage));
    // }

    // function clickHandlerOrder(event) {
    //     const field = event.target.dataset.field;
    //     const nextType = event.target.dataset.nextType;

    //     setBooks(getList(nextType === "dflt" 
    //     ? [...props.books]
    //     : [...props.books].sort((a, b) => (nextType === "ascn" ? 1 : -1) * (a[field] - b[field]))), currentPage);

    //     setTypesOrder(typesOrder.slice(1).concat(typesOrder.at(0)));
    //     setType(typesOrder[1]);
    // }

    return (
        <div className="list">
            {/* <button data-type={type} data-next-type={typesOrder[1]} data-field="price" onClick={clickHandlerOrder}>{order[type]}</button> */}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {books} */}
                </tbody>
            </table>
            {currentPage}
            <div className="pagination">
                {pagination.length > 1 && pagination}
            </div>
        </div>
    );
}

export default Books;