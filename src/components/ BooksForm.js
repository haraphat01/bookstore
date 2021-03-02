const BooksForm = () => {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    return (
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"/>
    <select>{categories.map(category=>{
        return <option value={category}>{category}</option>
    } )}</select>
    <button type="submit">Submit</button>
        </form>
    )
}

export default BooksForm