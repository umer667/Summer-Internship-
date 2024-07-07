///----Question 1:
async function fetchAlbums() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();

    const filteredAlbums = albums
      .filter((album) => album.title)
      .map((album) => ({
        id: album.id,
        userId: album.userId,
        title: album.title,
      }));

    return filteredAlbums;
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw error;
  }
}

///---------------- Question 2:
const axios = require("axios");

async function fetchPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    const filteredAndSortedPosts = posts
      .filter((post) => post.title)
      .sort((a, b) => a.id - b.id);

    return filteredAndSortedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

fetchPosts()
  .then((posts) => console.log(posts))
  .catch((error) => console.error("Error:", error));

//----------------Question 3

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const filteredUsers = users.filter((user) => user.email);

    const totalUsersWithPhone = filteredUsers.reduce((count, user) => {
      return user.phone ? count + 1 : count;
    }, 0);

    return {
      users: filteredUsers,
      totalUsersWithPhone,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

fetchUsers()
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));

//------------------Question 4:




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comments Table</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
  </style>
</head>
<body>
  <h1>Comments</h1>
  <table id="commentsTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
    async function fetchComments() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        const comments = response.data;

        const filteredComments = comments.filter(comment => comment.name); // Filter out comments without a name

        const tableBody = document.querySelector('#commentsTable tbody');

        filteredComments.forEach(comment => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${comment.id}</td>
            <td>${comment.name}</td>
            <td>${comment.email}</td>
            <td>${comment.body}</td>
          `;
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }

    fetchComments();
  </script>
</body>
</html>


/-----------Question 5

async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    const incompleteTodos = todos
      .filter(todo => !todo.completed)
      .map(todo => ({                  
        id: todo.id,
        title: todo.title,
      }));

    return incompleteTodos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
}

// Test the function by calling it and logging the result
fetchTodos()
  .then(todos => console.log(todos))
  .catch(error => console.error('Error:', error));
