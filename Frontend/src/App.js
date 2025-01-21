import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import Layout from "./pages/profile/Layout";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Categories from "./pages/admin/screens/categories/Categories";
import EditCategories from "./pages/admin/screens/categories/EditCategories";
import Users from "./pages/admin/screens/users/Users";
import BlogPage from "./pages/blog/BlogPage";
import Dashboard from "./pages/profile/screens/Dashboard";
import Blogs from "./pages/profile/screens/Blogs";
import Profile from "./pages/profile/screens/Profile";
import Favorites from "./pages/profile/screens/favorites";
import Notifications from "./pages/profile/screens/notifications";

function App() {
  return (
    <div className="App font-opensans h-full">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/u" element={<Layout />}>
          <Route index path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/new-Blog" element={<Layout />} />
          <Route path="profile/edit" element={<Layout />} />
          <Route path="favorites" element={<Favorites/>} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          <Route path="categories/manage" element={<Categories />} />
          <Route
            path="categories/manage/edit/:slug"
            element={<EditCategories />}
          />
          <Route path="users/manage" element={<Users />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
