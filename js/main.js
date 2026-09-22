// Midnight Ink Tattoo Studio — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Highlight active nav link based on current page
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) header.style.borderBottomColor = 'rgba(201,162,39,0.35)';
      else header.style.borderBottomColor = 'rgba(201,162,39,0.15)';
    });
  }

  // Gallery filtering (gallery.html)
  var filterButtons = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        galleryItems.forEach(function (item) {
          var match = filter === 'all' || item.getAttribute('data-category') === filter;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // Contact form (client-side only — no backend wired up yet)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('.form-msg');
      if (msg) {
        msg.textContent = 'Thank you — your enquiry has been noted. We will be in touch within 24 hours to confirm your consultation.';
        msg.classList.add('show');
      }
      form.reset();
    });
  }

});
