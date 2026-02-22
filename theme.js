(function(){
  // Apply saved theme immediately (before paint) to prevent flash
  var saved = localStorage.getItem('apl-theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function(){
    var inner = document.querySelector('.side-nav-inner');
    if(!inner) return;

    var btn = document.createElement('button');
    btn.className = 'theme-toggle';

    function updateLabel(){
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.innerHTML = dark
        ? '<span class="theme-toggle-icon">&#9728;&#xFE0E;</span> Light mode'
        : '<span class="theme-toggle-icon">&#9790;&#xFE0E;</span> Dark mode';
    }
    updateLabel();

    btn.addEventListener('click', function(){
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('apl-theme', next);
      updateLabel();
    });

    // Insert after the book-title link, before the first nav item
    var bookTitle = inner.querySelector('.side-nav-book');
    if(bookTitle && bookTitle.nextSibling) {
      inner.insertBefore(btn, bookTitle.nextSibling);
    } else {
      inner.appendChild(btn);
    }
  });
})();
