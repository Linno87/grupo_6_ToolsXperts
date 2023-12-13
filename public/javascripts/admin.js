const $ = (id) => document.getElementById(id);


window.onload = function () {
    $('nav-home-tab').addEventListener('click', function() {
        $('nav-home').style.display = 'block';
        $('nav-profile').style.display = 'none';
        $('nav-tabContentBrand').style.display = 'none'
        $('nav-tabContentProduct').style.display = 'block'
      });
    
      $('nav-profile-tab').addEventListener('click', function() {
        $('nav-home').style.display = 'none';
        $('nav-profile').style.display = 'block';
        $('nav-tabContentProduct').style.display = 'none'
        $('nav-tabContentBrand').style.display = 'block'
        $('nav-tabContentBrand').classList = 'block'
      });
}