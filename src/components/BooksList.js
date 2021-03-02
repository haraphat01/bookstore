import { connect } from 'react-redux';

const BooksList = (props) => {
    const { books } = props
    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
            </tr>
            {books.map(book => {
                return <Book  {...book} />
            })}
        </table>
    )
}

const Book = ({ id, title, category }) => {

    return (
        <tr>
            <th>{id}</th>
            <th>{title}</th>
            <th>{category}</th>
        </tr>
    )
}

const mapStateToProps = state => ({
    books: state.books
})
export default connect(mapStateToProps, null)(BooksList) 