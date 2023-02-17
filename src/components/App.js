import { Profile } from "./Profile/Profile";
import user from '../user.json'
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={user} />
    </Layout>
  );
};
