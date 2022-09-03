const apiKey = "833ea1b9d7mshbef97797dff363dp1d9ac4jsna2801a24e32d";

function getNews(max) {
  const url = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=" + max;
  
 const options = {
    headers: new Headers({
      "x-rapidapi-key": apiKey}),
    mode: 'cors'
  };

  fetch(url, options)
    .then(response => response.json())
    .then(responseJson => displayNews(responseJson));
}

function watchForm() {
  $('#js-form').submit(event => {
    // console.log(event)
    event.preventDefault();
    const max= event.target.term.value
    getNews(max);
  });
}

function displayNews(responseJson){
 $("#result").html("")
  
  responseJson.value.forEach(url => {
    if(url.isSafe){
    $("#result").append(`<div class="p-3"><br><h2>${url.title}</h2><em>Published at: ${url.datePublished}</em><hr><h4>${url.description}</h4><p>${url.body}</p><br></div>`)
    }
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});



