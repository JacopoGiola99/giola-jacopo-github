import loginMock from '../api/loginMock.json'
import { useState } from 'react';

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginOnClick = () => {
    const username = document.getElementById('inputUsername').value;
    const email = document.getElementById('inputEmail').value;

    if (username !== '' && email !== '') {

      const a = loginMock.filter(user => user.username === username);
      const b = loginMock.filter(user => user.email === email);
      const la = a.length;
      const lb = b.length;

      if (la !== 0 && lb !== 0) {
        if (a[0].username === b[0].username && a[0].email === b[0].email) {
          setLoggedIn(true);
          console.log("login effettuato");
        }
      } else {
        console.log("email o password errata");
      }

    } else {
      console.log("devi inserire i tuoi dati nei campi");
    }
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      {
        loggedIn ?
          <div>
            <h2>sei loggato</h2>
          </div>
          :
          <div>
            <h2>login</h2>
            <input id='inputUsername' placeholder='username'></input>
            <input id='inputEmail' placeholder='email'></input>
            <button onClick={() => loginOnClick()}>login</button>
          </div>
      }
    </main>

  );
}