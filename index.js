function bigImg(x) {
    x.style.height = "100%";
    x.style.width = "200px";
    x.style.margin="12.5%";
  }
  
  function normalImg(x) {
    x.style.height = "50%";
    x.style.width = "150px";
    x.style.marginleft="5%";
  }

  $(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',5);
    });
}); 

<script type="text/javascript"> 
window.onload = function() {
    window.setTimeout(
        function() { window.scrollTo(0,0); },
        10
    );
};