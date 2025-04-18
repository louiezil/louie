import { AllUsers, Data } from "@/Utilities/Data";
import "./admin.css";
import Dell from "../myblogs/Dell";
import UserDell from "../myblogs/UserDell";

const Admin = async () => {
  const posts = await Data();
  const users = await AllUsers();

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>

      <section className="dashboard-stats">
        <div className="stat-card">
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>
        <div className="stat-card">
          <h2>{posts.length}</h2>
          <p>Total Posts</p>
        </div>
      </section>

      <section className="dashboard-section">
        <h3>Users</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>dateCreated</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.date.toString().slice(0, 21)}</td>
                  <td>
                    <UserDell id={user.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="dashboard-section">
        <h3>Posts</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>DateCreated</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.user}</td>
                  <td>{post.date.toString().slice(0, 21)}</td>
                  <td>
                    <Dell id={post.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Admin;
