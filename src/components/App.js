import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./login";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContactsProvider } from "../contexts/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
