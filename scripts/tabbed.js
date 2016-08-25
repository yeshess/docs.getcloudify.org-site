$(document).ready(generateTabbedNavigation);

function generateTabbedNavigation() {

  // iterate through all tab containers and generate their navigation bar by
  // collecting the tab ids
  $('.nav-tabs').each(function(i, nav) {
    var $nav = $(nav);
    // the tab-content div is expected to be right next to the nav-tabs div
    var tabsContainer = $nav.next();
    // collect all tab ids to generate the navigation
    var tabIds = tabsContainer.find('.tab-pane').map(function(i, tab) {
      return tab.id;
    });

    // generate the tab container navigation bar
    tabIds.each(function(i, id) {
      var tabLink = '<li><a data-toggle="tab" href="#' + id + '">' + id + '</a></li>';
      $nav.append(tabLink)
    });

    $nav.find('a:first').tab('show');

  });
};