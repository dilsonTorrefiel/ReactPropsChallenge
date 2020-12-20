import React from "react";

import card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {card(
        contacts[0].name,
        contacts[0].imgURL,
        contacts[0].phone,
        contacts[0].email
      )}
      {card(
        contacts[1].name,
        contacts[1].imgURL,
        contacts[1].phone,
        contacts[1].email
      )}
      {card(
        contacts[2].name,
        contacts[2].imgURL,
        contacts[2].phone,
        contacts[2].email
      )}
    </div>
  );
}

export default App;
