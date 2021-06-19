fetch('https://api.github.com/users/GabrielaVargas735/repos')
  .then((response) => response.json())
  .then((data) => {
    let repo = document.querySelector("#repos");
    for (let i = 0; i < data.length; i += 1) {
      const lista = document.createElement("li");
      repo.appendChild(lista);
      const all_repos = `
        <div class="all_repos">
            <div class="list_repos">
              <br>
              <h4 class="repos_list">${data[i].name}<h4>
              <div>
                <br>
                <a href="${data[i].html_url}"><p>${data[i].html_url}</p></a>
            </div>
        <div>
       `;
      lista.innerHTML = all_repos;
    }
});
