import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContactsContext = React.createContext();

export function useContact () {
  return useContext(ContactsContext);
}

export function ContactsProvider(props) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function createContact(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {props.children}
    </ContactsContext.Provider>
  );
}
