import BooksForm from '../containers/ BooksForm';

import '../App.css';

import BooksList from '../containers/BooksList';

function App() {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
