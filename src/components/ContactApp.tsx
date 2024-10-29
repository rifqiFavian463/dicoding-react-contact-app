import React from "react";
import { ContactList } from "./ContactList";
import { getData } from "../data";
import { contacts } from "../type";
import "../styles/style.css";

function ContactApp() {
  const contacts: contacts = getData();
  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export { ContactApp };
