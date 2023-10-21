function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      const dataContainer = document.getElementById("Datacontainer");
      data.forEach((userData) => {
        //console.log(userData);
        const card = document.createElement("div");
        card.classList.add("data");
        card.innerHTML = `
        <h4 class="postId">Post Id : <span>${userData.postId}</span></h4>
        <h4 class="postId">Id : <span>${userData.id}</span></h4>
        <h4 class="name">UserName :<span>${userData.name}</span></h4>
        <h4 class="email-data">User Mail :<span>${userData.email}</span></h4>
        <p class="data-body">Comment :<span>${userData.body}</span></p>  
                    `;
        dataContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching user details:", error);
    });
}
fetchData();
