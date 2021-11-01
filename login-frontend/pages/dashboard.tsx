import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <p><strong>Usuário</strong>: {user?.email}</p>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>      
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');
  
  console.log(response.data);
  
  return {
    props: {}
  }
});