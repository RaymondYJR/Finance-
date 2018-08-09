// function() {
//   const addActive = (event) => {
  // };
// const addActive = (event) => {
// document.getElementsByClassName("nav-search")[0].classList.add("active");
// }
// document.getElementById("search-input").addEventListener("focus", addActive);

   //  $('#search-input').on('keyup', function() {
   //    $('#hits-container').scrollTop(0);
   //  })

   //  $('.close-search').on('click', function(evt) {
   //    evt.preventDefault();
   //    $('#search-input').val('');
   //     $('.nav-search').removeClass('active');
   //   })

   // $('#search-input').on('blur', function(evt) {
   //   if(!evt.isDefaultPrevented) {
   //     console.log("blur");
   //    $('.nav-search').removeClass('active');
   //   }
   //  })
// };

// TODO: Autocomplete the input with AJAX calls.
const displayResults = (companyList) => {
  const list = document.getElementById("results");
  if (companyList) {
    for (let i = 0; i < companyList.length; i += 1) {
      list.insertAdjacentHTML("beforeend", `<li>${companyList[i].name}${companyList[i].ticker}</li>`);
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


// function toTitleCase(str) {
//     return str.replace(/(?:^|\s)\w/g, function(match) {
//         return match.toUpperCase();
//     });
// }
