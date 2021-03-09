import BooksForm from '../containers/ BooksForm';
import '../App.css';
import Navbar from './Navbar';

import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="container">
      <Navbar />
      <BooksList />
      <BooksForm />

    </div>
  );
}

export default App;
