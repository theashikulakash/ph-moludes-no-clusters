

const loadTodo = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => displayTodos(data))
}

const displayTodos = (todos) => {
  // 1. get the container and empty
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  todos.forEach(todo => {
    console.log(todo)
   // 2. create element
   const todoCard = document.createElement("div");
   todoCard.innerHTML = `
   <div class="todo-card">
            <p>${
              todo.completed == true
                ? `<i class="fa-solid fa-square-check"></i>`
                : `<i class="fa-regular fa-square-check"></i>`
            }</p>
            <h3>${todo.title}</h3>
        </div>
        `;

        // 3. add to the container
        todoContainer.appendChild(todoCard)
  });
}

loadTodo();




const loadPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(JSON => {
      displayPosts(JSON)
    })
}

const displayPosts = (posts) => {
  // 1. get the container and empty
  const postsContainer = document.getElementById("post-container");
  postsContainer.innerHTML = "";

  posts.forEach(post => {
   // 2. create element
   const postCard = document.createElement("div");
   postCard.innerHTML = `
   <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;

        // 3. add to the container
        postsContainer.appendChild(postCard)
  });
}






















// // // const result = fetch('https://jsonplaceholder.typicode.com/posts')
// //     //promise of response
// //       .then(response => response.json())
// //     // promise of json
// //       .then(data => console.log(data))


// const loadPost = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//       displayPosts(data)
//     })
// }

// const displayPosts = (posts) => {

//   const postsContainer = document.getElementById('postsContainer')
//   postsContainer.innerText = "";


//   posts.forEach(post => {
//     // console.log(post.title)

//     const li = document.createElement("li")
//     li.innerText = post.title;
//     postsContainer.appendChild(li);
//   });
// }



// const loadFetch = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }