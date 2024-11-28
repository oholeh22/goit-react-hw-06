import './App.css'
import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import SearchBox from './SearchBox/searchBox'

function App() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <ContactList />
        <SearchBox />
        <ErrorBoundary />
      </div>
    );
  }

export default App
