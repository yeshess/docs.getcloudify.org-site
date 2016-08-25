$(document).ready(setGithubButton);

function setGithubButton() {
  var $button = $('#edit-on-github');
  pathComponents = location.pathname.replace(/(^\/|\/$)/g, '').split('/');
  if (pathComponents && pathComponents[0] == 'cloudify') {
    $button.show();
    $button.click(function(e) {
      location.href = getGithubUrl(pathComponents);
    })
  }
}

function getGithubUrl(pathComponents) {
  var version = pathComponents[1];
  var branch = version + '-yoda';
  var repo = "https://github.com/cloudify-cosmo/docs.getcloudify.org";
  // at this point, pathComponents should be something along ['cloudify', 'x.x.x', 'path', 'to', 'doc']
  var repoPathComponents = pathComponents.slice(0).splice(2);
  // if it's a section index page, e.g. /blueprints/, append index.md
  if (repoPathComponents.length == 1) {
    repoPathComponents.push('index.md');
  }
  else {
    // otherwise, just append an .md extension to page url
    repoPathComponents[repoPathComponents.length - 1] += '.md';
  }
  return repo + "/edit/" + branch + "/content/" + repoPathComponents.join('/');
}
