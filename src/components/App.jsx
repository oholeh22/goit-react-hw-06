import './App.css'
import ContactForm from './ContactForm/contactForm';
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'

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
