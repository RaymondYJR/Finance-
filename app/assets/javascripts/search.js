$(function() {
    $('#search-input').on('focus', function() {
      $('.nav-search').addClass('active');
    })

    $('#search-input').on('keyup', function() {
      $('#hits-container').scrollTop(0);
    })

    $('.close-search').on('click', function(evt) {
      evt.preventDefault();
      $('#search-input').val('');
       $('.nav-search').removeClass('active');
     })

   $('#search-input').on('blur', function(evt) {
     if(!evt.isDefaultPrevented) {
       console.log("blur");
      $('.nav-search').removeClass('active');
     }
    })



    let search = instantsearch({
      appId: 'TCEAIJWSQQ',
      apiKey: '0a339ae0728b5cb0c3e80fd18141c8cd',
      indexName: 'bt_support_articles',
      searchParameters: {replaceSynonymsInHighlight: false},
      searchFunction: function(helper) {
         var searchResults = $('.search-results');
         if (helper.state.query === '') {
           searchResults.hide();
           return;
         }
         helper.search();
         searchResults.show();
       }
    });

        // add a searchBox widget
    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-input',
        placeholder: 'Search for libraries in France...'
      })
    );

    // add a hits widget
    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        hitsPerPage: 10,
        debug: true,
        templates: {
          item: '<a href="{{href}}" target="_blank"><div class="hit"><div class="hit-content"><h2 class="hit-title">{{{_highlightResult.title.value}}}</h2><br><small>{{lvl0}} {{#lvl1}}> {{{_highlightResult.lvl1.value}}} {{/lvl1}}{{#lvl2}}> {{{_highlightResult.lvl1.value}}} {{/lvl2}}{{#lvl3}}> {{{_highlightResult.lvl3.value}}} {{/lvl3}} {{#lvl4}}> {{{_highlightResult.lvl4.value}}}{{/lvl4}}</small><p class="hit-description">{{{_snippetResult.content.value}}}</p></div></div></a>',
          empty: '<div id="no-results-message"> <p>We didn`t find any results for the search <em>"{{query}}"</em>.</p></div>'
        }
      })
    );

    // start
    search.start();
});

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
