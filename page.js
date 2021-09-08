function renderDoc(content)
{
  target = document.getElementById('document'),
  converter = new showdown.Converter({tables: true, strikethrough: true, ghCodeBlocks: true});
  html = converter.makeHtml(content);
  target.innerHTML = html;
}

function capitalize(s) {
    if (typeof s !== 'string')
        return '';
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function pageChange(page)
{
    docsPage = "docs/" + page + ".md";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', docsPage);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        renderDoc(xhr.response);
        //document.title = "HuwCode Documentation - " + capitalize(page);
      }
    };
    xhr.onerror = function() {
      alert("Request failed");
    };
}

const defaultPage = "introduction";
if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    if (hash == "") {
        pageChange(defaultPage);
    }
    else {
        pageChange(hash);
    }
}
else {
  pageChange(defaultPage);
}