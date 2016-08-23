$(document).ready(function() {

  $('.toggle-site-toc').click(function(e) {
    $('.site-toc').toggleClass('fixed hidden-xs')
  })

  $('li.tree-node').click(function(e) {
    $(this).toggleClass('tree-expanded');
    e.stopPropagation()
  })

  // expand tree to show the current active link
  var $active = $('.sidebar .active');
  $active.parents('.tree-node').addClass('tree-expanded');

  // scroll to show active link
  // $active[0] && $active[0].scrollIntoView();

  // bind filter box to tree filter
  $('.sidebar-filter').on('keyup', function() {
    var text = $(this).val();
    filter(text);
  });

});

function filter(text) {
  if (!text) {
    $('li.tree-node').show().removeClass('tree-expanded');
    return;

  }

  var $roots = $('.tree-root');
  $roots.each(function() {
    filterRecursive($(this));
  });

  function filterRecursive($el) {

    var regex = new RegExp(text, 'i');

    var $children = $el.find('li.tree-node');
    if (!$children.length) {
      var isRelevant = regex.test($el.text());
      if (isRelevant) {
        return true;
      } else {
        return false;
      }
    }

    var isRelevant = false;
    $children.each(function() {
      isChildRelevant = filterRecursive($(this));
      if (isChildRelevant) {
        $(this).show();
        $(this).addClass('tree-expanded')
      } else {
        $(this).hide();
      }
      isRelevant = isRelevant || isChildRelevant
    })

    return isRelevant;

  }

}