import './App.css'
import ContactForm from './ContactForm/contactForm';
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        <ErrorBoundary />
      </div>
    );
  }

export default App
