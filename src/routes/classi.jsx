import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

export default function Classi() {

  const { session } = useContext(UserContext);
  console.log(session);

  const setUser = session.setUser();

  let navigate = useNavigate();

  const onLogOutClick = (setUser) => {
    setUser(false);
  }

  useEffect(() => {
    if (!session.user) {
      navigate('/login');
    }
  }, [session, navigate])

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>classi</h2>
      <button onClick={() => onLogOutClick(setUser)}>logout</button>
    </main>
  );
}