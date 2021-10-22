import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get<any>('/me').then(response => console.log(response));
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <p><strong>Usuário</strong>: {user?.email}</p>
    </>
  )
}