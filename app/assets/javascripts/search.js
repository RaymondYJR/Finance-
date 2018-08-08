// $(function() {
//     $('#search-input').on('focus', function() {
//       $('.nav-search').addClass('active');
//     })

//     $('#search-input').on('keyup', function() {
//       $('#hits-container').scrollTop(0);
//     })

//     $('.close-search').on('click', function(evt) {
//       evt.preventDefault();
//       $('#search-input').val('');
//        $('.nav-search').removeClass('active');
//      })

//    $('#search-input').on('blur', function(evt) {
//      if(!evt.isDefaultPrevented) {
//        console.log("blur");
//       $('.nav-search').removeClass('active');
//      }
//     })
// });

// TODO: Autocomplete the input with AJAX calls.
const displayResults = (companyList) => {
  const list = document.getElementById("results");
  if (companyList) {
    list.insertAdjacentHTML("beforeend", `<div><li>${companyList}</li></div>`);
  }
  // if (companyList) {
  //   for (let i = 0; i < companyList.length; i += 1) {
  //     if (companyList[i].exchDisp === "NYSE" || companyList[i].exchDisp === "NASDAQ") {
  //       list.insertAdjacentHTML("beforeend", `<div class="item" id="myUL"><li>${companyList[i].name}${companyList[i].symbol}</li></div>`);
  //     }
  //   }
  // }
};

finalSearch = "";

const searchWords = (event) => {

  // const myNode = document.getElementById("results");
  // while (myNode.firstChild) {
  //   myNode.removeChild(myNode.firstChild);
  // }
  var headers = new Headers({"Origin": ''});
  let finalSearch = event.currentTarget.value;
  fetch(`https://crossorigin.me/http://autoc.finance.yahoo.com/autoc?query=${finalSearch}&region=1&lang=en&callback=YAHOO.Finance.SymbolSuggest.ssCallback&callback=?`, headers)
    .then(response => response.json())
    .then((data) => {
      // displayResults(data.result);
      console.log(data);
    });
};

const input = document.getElementById("input-content");
input.addEventListener("keyup", searchWords);

// function toTitleCase(str) {
//     return str.replace(/(?:^|\s)\w/g, function(match) {
//         return match.toUpperCase();
//     });
// }
