import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import userList from "./pages/users/user-list";
import PostShow from "./pages/posts/post-show";
import UserShow from "./pages/users/user-show";
import PostEdit from "./pages/posts/post-edit";
import PostCreate from "./pages/posts/post-create";
import { Article, Person } from "@mui/icons-material";
import { HomePage } from "./pages/HomePage";
// import { darkTheme } from './theme';
import { authProvider } from "./AuthProviders";

export const App = () => (
  <Admin 
    layout={Layout} 
    dataProvider={dataProvider} 
    dashboard={HomePage}
    authProvider={authProvider}
  >
    <Resource 
      icon={Article} 
      name="posts" 
      list={PostList} 
      show={PostShow} 
      edit={PostEdit} 
      create={PostCreate}
    />
    <Resource 
      icon={Person} 
      name="users" 
      list={userList} 
      show={UserShow} 
    />
  </Admin>
);