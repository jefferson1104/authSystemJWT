import { useContext, useEffect } from "react";

import { Can } from "../components/Can";
import { AuthContext, signOut } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

import { DashboardPage } from "../styles/dashboard";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <DashboardPage>
      <div>
        <h1>Dashboard</h1>
        <h2><strong>User</strong>: {user?.email}</h2>

        <Can permissions={['metrics.list']}>
          <p>You have a metrics permission</p>
        </Can>

        <button onClick={signOut}>Sign Out</button>
      </div>
    </DashboardPage>
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