// TODO: Autocomplete the input with AJAX calls.
const displayResults = (companyList) => {
  const list = document.getElementById("results");
  if (companyList) {
    for (let i = 0; i < companyList.length; i += 1) {
      list.insertAdjacentHTML("beforeend", `<div class="hit"><div class="hit-title">${companyList[i].name}</div><div class="hit-description">${companyList[i].ticker}</div></div>`);
    }
  } else {
    list.insertAdjacentHTML("beforeend", `<li>Sorry, the company cannot be found.</li>`);
  }
};

let finalSearch = "";

const searchWords = (event) => {
  var config = {
    headers: {'Authorization': 'Basic ZjNkNmRkMTcxNjNmNGZmMjU2OGE4YWE1ZjNiMTU1YmM6NzQ0OGNiNjY1YTBkYmNjMGNjMjdjNzBlZGRhMGRlZTE='}
  };
  let finalSearch = event.currentTarget.value;
  if (finalSearch != "") {
    fetch(`https://api.intrinio.com/companies?query=${finalSearch}`, config)
    .then(response => response.json())
    .then((data) => {
      const myNode = document.getElementById("results");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
      document.getElementsByClassName("nav-search")[0].classList.add("active");
      displayResults(data.data);
    });
  } else {
      const myNode = document.getElementById("results");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
      document.getElementsByClassName("nav-search")[0].classList.remove("active");
  }

};

const input = document.getElementById("input-content");
input.addEventListener("keyup", searchWords);


const clearFields = (event) => {
  document.getElementById('input-content').value = '';
  const myNode = document.getElementById("results");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  document.getElementsByClassName("nav-search")[0].classList.remove("active");
}

const closeSearch = document.getElementById("close-search-icon");
closeSearch.addEventListener("click", clearFields);
