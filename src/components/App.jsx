import './App.css'
import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/ContactList.jsx'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import SearchBox from './SearchBox/SearchBox'

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
