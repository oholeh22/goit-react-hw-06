import './App.css'
import ContactForm from './ContactForm/contactForm';
import SearchBox from './SearchBox/searchBox';
import ContactList from './ContactList/contactList';

function App() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    );
  }

export default App
