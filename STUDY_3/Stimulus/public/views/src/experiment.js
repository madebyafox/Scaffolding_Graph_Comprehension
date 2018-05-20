//--------------------------------------------------------------------
//Scaffolding Graph Comprehension (for Unconventional Graphs)
//Experimental Stimuli
//
//             .       .
//             |       |                ,-
// ;-.-. ,-: ,-| ,-.   |-. . .   ,-:    |  ,-. . ,
// | | | | | | | |-'   | | | |   | |    |- | |  X
// ' ' ' `-` `-' `-' o `-' `-| o `-` o  |  `-' ' `
//                         `-'         -'
//Amy Rae Fox   amyraefox@gmail.com
//Experimental Design: x conditions (by scaffold) between subjects measure
//of problem solving performance using first triangular model graph
//first 5 questions of each graph are scaffolded, remainder are
//not. Concludes with demographic survey and preferences before debrief
//---------------------------------------------------------------------


//---------------------------------------------------------------------
//  DESCRIPTION OF CONDITIONS
//  _ _ _  [external scaffold] [impasse] [grid system]
//  [external scaffold] 1 = none (control)
//                      2 = static image
//                      3 = interactive image
//  [impasse]           1 = none (control)
//                      2 = impasse problem
//  [grid system]       1 = cartesian axes, full y, triag x
//                      2 = cartesian axes, into triag y, triag x
//                      3 = triangular axes, inside triag y, triag x
//                      4 = cartesian axes, inside y, triag x
//                      5 = cartesian axes, full y, full x
//---------------------------------------------------------------------


//---------------SETUP VARIABLES---------------------------------------
var graph, scenario, question, scaffold, block, correct, orth_correct ;
var graph = "triangular";
var experiment = "2YP3"; //overriden by URL
var session = "default"; //overriden by codes block
var condition = 0;  //overriden by codes block
var explicit = 1; //overriden by codes block
var impasse = 1; //overriden by codes block
var axis = 1; //overrridden by codes block
var colorClick = false; //define whether values turn green when clicked
var clicked = [["answer","clicked"]]; //populate first row of clicked array with headers
var hovered = ""; //string for sequence of data points that have been hovered over
var scaffolds = [
  "none",
  "text-image",
  "interactive"
];
var questions = [
  "starttime",
  "starts",
  "meets",
  "endtime",
  "midpoint",
  "duration",
  "duration+starts",
  "duration+contained",
  "starttime+before+endtime+during",
  "ends",
  "starttime",
  "starts",
  "meets",
  "endtime",
  "midpoint",
  "strategy"
];
var clicks = 0; //number of clicks on the page
var q = 0 ; //question number, used for data file override
var scenarios = ["acme","bigset"]; //determine the order of scenarios by randomly sorting the array
var sid = jsPsych.randomization.randomID(5);
sid = sid.toUpperCase();
console.log(sid);

//-------------SETUP & INSTRUCTION BLOCKS---------------------------------------------
var phone = {
    type: 'single-stim',
    stimulus : 'img/phone.png',
    choices: [13, 32],
    data: {
      block:"phone"
    },
    on_start: function(data){}
};
var consent = {
    "type": "html",
    "force_refresh": true,
    "url": "../views/src/external/consent.html",
    "cont_btn": "start",
    "check_fn": check_consent,
    on_start: function(data){},
    data: {
      block:"consent"
    }
};
var codes = {
    type: 'survey-text',
    preamble: "<p>Please enter the following information from your participant card</p>",
    questions: ["Session code: ", "Condition code: "],
    on_start: function(data){},
    data: {
      block:"codes"
    },
    on_finish: function(data){
      var i = JSON.parse(data.responses);
      session = i["Q0"];
      session = session.trim();
      session = session.toLowerCase();
      condition = i["Q1"];
      condition = condition.trim();
      // condition = parseInt(condition);

      explicit = parseInt(condition[0]); //first digit of condition is the explicit scaffold
      impasse = parseInt(condition[1]); //second digit of condition is implicit - impasse
      axis = parseInt(condition[2]);

      console.log("experiment: "+experiment);
      console.log("session: "+session);
      console.log("graph: "+graph);
      console.log("condition: "+condition);
      jsPsych.data.addProperties({experiment:experiment});
      jsPsych.data.addProperties({graph:graph});
      jsPsych.data.addProperties({session:session});
      jsPsych.data.addProperties({condition:condition});
    }
};
var instructions_lab = {
    "type": "html",
    "force_refresh": true,
    "url": "../views/src/external/instructions_lab.html",
    "cont_btn": "start",
    on_start: function(){
      scenarios=scenarios;
    },
    data: {
      block:"instructions_lab"
    }
};
var scenario = {
    type: 'single-stim',
    stimulus : 'img/'+scenarios[0]+'.png',
    choices: [13, 32],
    prompt: '<p style="font-style:italic;">Press enter to continue</p>',
    data: {
      block: "scenario"
    },
    on_start: function(data){
    }
}
var debrief = {
    "type": "html",
    "force_refresh": true,
    "url": "../views/src/external/debrief.html",
    "cont_btn": "start",
    data: {
      block: "debrief"
    },
    on_start: function(data){
    }
};

//-------------SURVEY BLOCKS---------------------------------------------
var text_questions = ["What is your age?",
                      "In what country were you born?"];
var choice_questions = ["What is your first language?",
                        "What is your year in school?",
                        "What is your major area of study?",
                        "What is your gender?"];
var lang_options = [ "English", "Spanish", "Mandarin or Cantonese", "Other"];
var year_options = ["First", "Second","Third","Fourth","Fifth","Graduate","Other"];
var major_options = ["Math or Computer Sciences","Social Sciences (incl. CogSci)", "Biomedical & Health Sciences",
                      "Natural Sciences","Engineering","Humanities","Fine Arts"];
var gender_options = ["Male","Female","Other"];

// var strategy_question = ["Please explain how to determine what events start at 10am."];
// var strategy_survey = {
//     type: 'survey-text',
//     questions: strategy_question,
//     preamble:"<img src=\"../img/phone.png\">",
//     data: {
//       block: "demo-0"
//     }
// };

var text_survey = {
    type: 'survey-text',
    questions: text_questions,
    data: {
      block: "demo-1"
    }
};
var choice_survey = {
    type: 'survey-multi-choice',
    questions: choice_questions,
    options: [lang_options, year_options,major_options,gender_options],  // need one scale for every question on a page
    required: [true, true,true,true],   // set whether questions are required
    horizontal: true , // centres questions and makes options display horizontally
    data: {
      block: "demo-2"
    }
};


//-------------STIM BLOCKS-----------------------------------------------
var triangular_scaffolded = {
  type: "html",
  force_refresh: true,
  url: "../views/src/external/stimulus.html",
  cont_btn: "testingButton",
  data : {},
  on_finish: function(data) {
    // console.log("finished: "+data.internal_node_id);
    jsPsych.data.addDataToLastTrial({graph:graph});
    jsPsych.data.addDataToLastTrial({scenario:scenario});
    jsPsych.data.addDataToLastTrial({question:question});
    jsPsych.data.addDataToLastTrial({q:q});
    jsPsych.data.addDataToLastTrial({clicks:clicks/2});
    jsPsych.data.addDataToLastTrial({condition:condition});
    jsPsych.data.addDataToLastTrial({explicit:explicit});
    jsPsych.data.addDataToLastTrial({impasse:impasse});
    jsPsych.data.addDataToLastTrial({axis:axis});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({orth_correct:orth_correct});
    jsPsych.data.addDataToLastTrial({answer:answer});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({hovered:hovered});
    jsPsych.data.addDataToLastTrial({block:"triangular_scaffolded"});
    jsPsych.data.addDataToLastTrial({mouseLog:mouseLog});
    console.log("TS"+(data.trial_index-20));
    console.log("finished: "+data.internal_node_id);
    console.log("tri_correct? "+correct);
    console.log("orth_correct? "+orth_correct);
    console.log("PRINT MOUSE LOG "+mouseLog);
    window._mfq.push(["setVariable", "SID", sid]);
    window._mfq.push(["setVariable", "CONDITION", condition]);
    window._mfq.push(["setVariable", "TRI_CORRECT", correct]);
    window._mfq.push(["setVariable", "ORTH_CORRECT", orth_correct]);
  },
  timeline: [
      {on_start: function(){
          graph= "triangular";
          scenario = scenarios[0];
          question = questions[0];
          q = 1;
          clicks = 0;
          explicit = explicit;
          impasse = impasse;
          axis = axis;
          sid = sid;
          window._mfq.push(["newPageView", "/1"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[0];
        question = questions[1];
        q = 2;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        sid = sid;
        window._mfq.push(["newPageView", "/2"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[0];
        question = questions[2];
        q = 3;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/3"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[0];
        question = questions[3];
        q = 4;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/4"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[0];
        question = questions[4];
        q = 5;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/5"]);
      }}
    ]
}
var triangular_testing = {
  type: "html",
  force_refresh: true,
  url: "../views/src/external/stimulus.html",
  cont_btn: "testingButton",
  data : {},
  on_finish: function(data) {
    // console.log("finished: "+data.internal_node_id);
    // console.log("correct? "+correct);
    jsPsych.data.addDataToLastTrial({graph:graph});
    jsPsych.data.addDataToLastTrial({scenario:scenario});
    jsPsych.data.addDataToLastTrial({question:question});
    jsPsych.data.addDataToLastTrial({q:q});
    jsPsych.data.addDataToLastTrial({clicks:clicks/2});
    jsPsych.data.addDataToLastTrial({condition:condition});
    jsPsych.data.addDataToLastTrial({explicit:explicit});
    jsPsych.data.addDataToLastTrial({impasse:impasse});
    jsPsych.data.addDataToLastTrial({axis:axis});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({orth_correct:orth_correct});
    jsPsych.data.addDataToLastTrial({answer:answer});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({hovered:hovered});
    jsPsych.data.addDataToLastTrial({block:"triangular_testing"});
    jsPsych.data.addDataToLastTrial({mouseLog:mouseLog});
    console.log("TT"+(data.trial_index-25));
    console.log("finished: "+data.internal_node_id);
    console.log("tri_correct? "+correct);
    console.log("orth_correct? "+orth_correct);
    // console.log("PRINT MOUSE LOG "+mouseLog);
    window._mfq.push(["setVariable", "SID", sid]);
    window._mfq.push(["setVariable", "CONDITION", condition]);
    window._mfq.push(["setVariable", "TRI_CORRECT", correct]);
    window._mfq.push(["setVariable", "ORTH_CORRECT", orth_correct]);
  },
  timeline: [
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[5];
        q = 6;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/6"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[6];
        q = 7;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/7"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[7];
        q = 8;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/8"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[8];
        q = 9;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/9"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[9];
        q = 10;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/10"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[10];
        q = 11;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/11"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[11];
        q = 12;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/12"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[12];
        q = 13;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/13"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[13];
        q = 14;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/14"]);
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        question = questions[14];
        q = 15;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/15"]);
      }}
  ],
  randomize_order: false
}
var triangular_strategy = {
  type: "html",
  force_refresh: true,
  url: "../views/src/external/stimulus.html",
  cont_btn: "strategyButton",
  data : {},
  on_finish: function(data) {
    // console.log("finished: "+data.internal_node_id);
    // console.log("correct? "+correct);
    jsPsych.data.addDataToLastTrial({q:q});
    jsPsych.data.addDataToLastTrial({answer:answer});
    jsPsych.data.addDataToLastTrial({block:"triangular_testing"});
    console.log("TT"+(data.trial_index-25));
    console.log("finished: "+data.internal_node_id);
    window._mfq.push(["setVariable", "SID", sid]);
    window._mfq.push(["setVariable", "CONDITION", condition]);
  },
  timeline: [
      {on_start: function(){
        graph= "triangular";
        scenario = "";
        question = questions[15];
        q = 16;
        clicks = 0;
        explicit = explicit;
        impasse = impasse;
        axis = axis;
        window._mfq.push(["newPageView", "/16"]);
      }}
  ],
  randomize_order: false
}
//-------------ESTABLISH THE TIMELINE -----------------------------------
var exp_timeline = [];

//SETUP------------------------------------------------------------------

exp_timeline.push(phone);
exp_timeline.push(consent);
exp_timeline.push(codes);
exp_timeline.push(instructions_lab);
//TRIANGULAR MODEL
exp_timeline.push(scenario);
exp_timeline.push(triangular_scaffolded);  //with scaffold q 1-5
exp_timeline.push(triangular_testing);     //without scaffold q 6-15
//STRATEGY
exp_timeline.push(triangular_strategy);
//WRAPUP
exp_timeline.push(text_survey);
exp_timeline.push(choice_survey);
exp_timeline.push(debrief);

jsPsych.data.addProperties({
  subject: sid
});

jsPsych.init({
  // fullscreen: true,
  timeline: exp_timeline,
  on_trial_start(){
    // console.log("new trial is starting");
    clicked = [["answer","clicked"]]; //reset clicked array
    hovered = ""; //reset number of help click counter
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
  on_finish: function(data){
    console.log("trial has ended");
    jsPsych.data.displayData();
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
