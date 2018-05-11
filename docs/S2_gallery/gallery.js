$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){
		selectedClass = $(this).attr("data-rel");
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);

	});
});

var folder = "img/";
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
						var name = val;
						var classes = name.match(/_(\w+)./g);
						classes = classes[0].replace(".", "");
						classes = classes.split("_");
						classes.shift();
						console.log(val);
						console.log(classes);
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $("#portfolio").append( "<div id="+i+"/>");
								$("#"+i+"").append( "<img id='"+val+"'src='"+ folder + val +"'>" );
								$("#"+i+"").addClass("all");
								$("#"+i+"").addClass("tile");
								$("#"+i+"").addClass("scale-anm");
								for (n=0;n<classes.length;n++) {
									$("#"+i+"").addClass(classes[n]);
								}
            }
        });
    }
});
