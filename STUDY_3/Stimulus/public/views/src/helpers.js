
/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 */
var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

//check value of consent checkbox
var check_consent = function(elem) {
  if ($('#consent_checkbox').is(':checked')) {
    return true;
  } else {
    alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
    return false;
  }
  return false;
};

var check_draw = function(elem) {
  var validated = true;
  if($('#check-name').is(':not(:checked)')){validated = false;}
  if($('#check-sess').is(':not(:checked)')){validated = false;}
  if($('#check-title').is(':not(:checked)')){validated = false;}
  if($('#check-axes').is(':not(:checked)')){validated = false;}
  if($('#check-tick').is(':not(:checked)')){validated = false;}
  if($('#check-data').is(':not(:checked)')){validated = false;}
  if (!validated) {
    alert ("Make sure you've checked every item on the checklist!");
  }
  return validated;
};



//evaluate correctness of answer onSubmit
function checkTriangularAnswer() {
  console.log("end clicked: "+clicked);
  console.log("end hovered: "+hovered);
  var selected = [];
    $ (':checked').not('.onoffswitch-checkbox').each(function() { //check each checkbox except help toggle
    selected.push(""+$(this).attr('value')+"");
  });
  var index = scenario+"."+question+"."+impasse;
  if ( _.isEqual(selected, triangular_answers[index])) {
     correct = 1; }
  else {
    correct = 0;
  }
  console.log("selected: "+selected);
  answer = selected;
  // console.log("triangle_correct"+correct);
  checkOrthogonalAnswer();
}

function checkOrthogonalAnswer(){
  console.log("end clicked: "+clicked);
  console.log("end hovered: "+hovered);
  var selected = [];
    $ (':checked').not('.onoffswitch-checkbox').each(function() { //check each checkbox except help toggle
    selected.push(""+$(this).attr('value')+"");
  });
  var index = scenario+"."+question+"."+impasse;
  if ( _.isEqual(selected, orthogonal_answers[index])) {
    orth_correct = 1; }
  else {
    orth_correct = 0;
  }
  console.log("selected: "+selected);
  answer = selected;
  // console.log("orthogonal_correct"+orth_correct);
}

function submitStrategy(){
    console.log("submitting strategy");
    answer = $("textarea").val();
    console.log(answer);
}
