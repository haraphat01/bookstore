import books from "../reducers /books"

const BooksList = () => {
    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
            {books.map((book) => {
                const { id, title, category } = book
                return (
                    <tr>
                        <th>{id}</th>
                        <th>{title}</th>
                        <th>{category}</th>
                    </tr>
                )
            })}

        </table>
    )
}

export default BooksList