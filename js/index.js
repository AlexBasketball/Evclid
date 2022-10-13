document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work__tabs-btn').forEach(function(workTabs) {
    workTabs.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.work__tabs-btn').forEach(function(btn){
        btn.classList.remove('work__tabs-btn-active')});
        event.currentTarget.classList.add('work__tabs-btn-active');

      document.querySelectorAll('.work__tabs-content').forEach(function(tabContent) {
        tabContent.classList.remove('work__tabs-content-active')
      })
        document.querySelector(`[data-target="${path}"]`).classList.add('work__tabs-content-active')
        });
      });

      $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
      });

      $('.header__btn').click(function(event) {
        $('.header__btn,.header__form').addClass('is-active');
      });

      $('.header__form-close').click(function(event) {
        event.preventDefault ()
        $('.header__btn,.header__form').removeClass('is-active');
      });

      const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
      $("#accordion").accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
    })
})
