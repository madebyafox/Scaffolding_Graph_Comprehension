//--------------------------------------------------------------------
//Evaluating Scaffolds for Graph Learning
//Experimental stimuli for Eye Tracking followup study #3
//
//             .       .
//             |       |                ,-
// ;-.-. ,-: ,-| ,-.   |-. . .   ,-:    |  ,-. . ,
// | | | | | | | |-'   | | | |   | |    |- | |  X
// ' ' ' `-` `-' `-' o `-' `-| o `-` o  |  `-' ' `
//                         `-'         -'
//Amy Rae Fox   amyraefox@gmail.com
//Experimental Design: 4 conditions (by scaffold) between subjects measure
//of problem solving performance using triangular graph
//Concludes with demographic survey and preferences before debrief
//---------------------------------------------------------------------

//PULL CONDITION AND  NUMBER FROM QUERY STRING!

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var condition = getParameterByName('C');
var question = getParameterByName('Q');
var impasse = getParameterByName('P');
console.log("condition: "+condition);
console.log("question: "+question)
console.log("question: "+impasse)

//---------------SETUP VARIABLES---------------------------------------
var graph, scenario, scaffold, block, correct ;
var experiment = "three"; //overriden by URL
var session = "default"; //overriden by codes block

var colorClick = true; //define whether values turn green when clicked
var clicked = [["answer","clicked"]]; //populate first row of clicked array with headers
var scaffolds = [    //<--NOTE: These need to be addressed on the stimulus.html page!
  "dummy",
  "none",
  "describe-what",
  "show-static",
  "diagonal"
];
var questions = [
  "start",
  "end",
  "duration",
  "midpoint",
  "start+overlap",
  "start+duration",
  "before+overlap",
  "overlap+overlap",
  "during+overlap",
  "contain+duration",
  "starts",
  "finishes",
  "during",
  "meets",
  "starts+finishes",
  "before+duration"
];
var scenarios = ["acme"]; //will activate scenarios[0] -> sort if needed


//-------------STIM BLOCKS-----------------------------------------------

var triangular_scaffolded = {
  type: "html",
  force_refresh: true,
  url: "../views/src/external/stimulus.html",
  cont_btn: "start",
  data : {},
  on_finish: function(data) {
    console.log("finished: "+data.internal_node_id);
    console.log("correct? "+correct);
    jsPsych.data.addDataToLastTrial({graph:graph});
    jsPsych.data.addDataToLastTrial({scenario:scenario});
    jsPsych.data.addDataToLastTrial({question:question});
    jsPsych.data.addDataToLastTrial({impasse:impasse});
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({answer:answer});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({block:"triangular"});
    jsPsych.data.addProperties({experiment:experiment});
    jsPsych.data.addProperties({condition:condition});
    console.log("finished: "+data.internal_node_id);
    console.log("correct? "+correct);
    console.log("experiment: "+experiment);
    console.log("session: "+session);
    console.log("condition: "+condition);
    console.log("impasse: "+impasse);

  },
  timeline: [
      {on_start: function(){
          jsPsych.data.addProperties({q:question});
          graph= "triangular";
          scenario = scenarios[0];
          scaffold = scaffolds[condition];
          question = questions[question];
          impasse = impasse;

      }}
    ]
}

//-------------ESTABLISH THE TIMELINE -----------------------------------

var exp_timeline = [];


//SETUP

exp_timeline.push(triangular_scaffolded);  //linear with scaffold q 1-5

jsPsych.init({
  // fullscreen: true,
  timeline: exp_timeline,
  on_trial_start: function() {
    // console.log("new trial is starting");
    clicked = [["answer","clicked"]]; //reset clicked array
    helps = 0; //reset number of help click counter
  },
  on_trial_finish: function() {
    // $.ajax({
    //   type: "POST",
    //   url: "/experiment-data",
    //   data: JSON.stringify(jsPsych.data.getLastTrialData()),
    //   contentType: "application/json"
    // })
    // .done(function() {
    //   // window.location.href = "finish";
    // })
    // .fail(function() {
    //   alert("A problem occurred while writing to the database. Please contact the researcher for more information.")
    //   window.location.href = "/";
    // })
  },
  on_finish: function(data)
  {
    console.log("trial has ended");
    // jsPsych.data.displayData();
    $.ajax({
      type: "POST",
      url: "/experiment-data",
      data: JSON.stringify(jsPsych.data.getData()),
      contentType: "application/json"
    })
    .done(function() {
      window.location.href = "finish";
    })
    .fail(function() {
      alert("A problem occurred while writing to the database. Please contact the researcher for more information.")
      window.location.href = "/";
    })
  }



});
