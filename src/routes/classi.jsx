import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

export default function Classi() {

  const { session, setSession } = useContext(UserContext);
  console.log(session);

  let navigate = useNavigate();

  const onLogOutClick = (setSession) => {
    setSession(false);
  }

  useEffect(() => {
    const checkSession = async () => {
      try {
        if (!session) {
          navigate('/login');
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    checkSession();
  })

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>classi</h2>
      <button onClick={() => onLogOutClick(setSession)}>logout</button>
    </main>
  );
}