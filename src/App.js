import "./App.css";
import { useState } from "react";
import "./contacts.json";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.splice(0, 5));

  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

  function handleAddClick() {
    const clone = [...contactList];
    clone.push(randomContact);
    setContactList(clone);
  }

  function handleSortByPopularityClick() {
    const clone = [...contactList];
    clone.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContactList(clone);
  }

  function handleSortByNameClick() {
    const clone = [...contactList];
    clone.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactList(clone);
  }

  function handleDeleteClick(contactIndex) {
    const clone = [...contactList];
    clone.splice(contactIndex, 1);
    // nao sei como usar o Id pra tirar um elemento especifico
    setContactList(clone);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="btns">
        <button className="btn" onClick={handleAddClick}>
          Add Random Contact
        </button>
        <button className="btn" onClick={handleSortByPopularityClick}>
          Sort by popularity
        </button>
        <button className="btn" onClick={handleSortByNameClick}>
          Sort by name
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((currentContact, i) => (
            <tr>
              <td>
                <img
                  style={{ width: "6vw" }}
                  src={currentContact.pictureUrl}
                  alt="Foto de perfil do contato"
                />
              </td>
              <td> {currentContact.name} </td>
              <td> {currentContact.popularity.toFixed(2)} </td>
              <td> {currentContact.wonOscar ? "🏆" : ""} </td>
              <td>{currentContact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button
                  style={{
                    width: "12vw",
                    height: "5vh",
                    backgroundColor: "#fb6060",
                  }}
                  className="btn"
                  onClick={() => {
                    handleDeleteClick(i);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
