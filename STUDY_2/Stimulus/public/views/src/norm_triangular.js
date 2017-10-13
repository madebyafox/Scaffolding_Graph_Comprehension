//--------------------------------------------------------------------
//Evaluating Scaffolds for Graph Learning
//Experimental stimuli for PhD 2nd year project
//
//             .       .
//             |       |                ,-
// ;-.-. ,-: ,-| ,-.   |-. . .   ,-:    |  ,-. . ,
// | | | | | | | |-'   | | | |   | |    |- | |  X
// ' ' ' `-` `-' `-' o `-' `-| o `-` o  |  `-' ' `
//                         `-'         -'
//Amy Rae Fox   amyraefox@gmail.com
//NORMING FOR EXPERIMENTAL QUESTIONS
//RUNS ALL QUESTIONS IN 1 SCENARIO IN THE TRIANGULAR model
//RANDOM SELECTION OF SCENARIO
//---------------------------------------------------------------------


//---------------SETUP VARIABLES---------------------------------------
var graph, scenario, question, scaffold, block, correct ;
var experiment = "norm_triangular"; //overriden by URL
var session = "default"; //overriden by codes block
var condition = 0;  //overriden by codes block
var colorClick = true; //define whether values turn green when clicked
var clicked = [["answer","clicked"]]; //populate first row of clicked array with headers
var scaffolds = [
  "none",
  "describe-what",
  "describe-how",
  "show-static",
  "show-interactive"
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
var scenarios = ["longmire","axis"]; //determine the order of scenarios by randomly sorting the array
var helps = 0;
scenarios.sort(function(a, b){return 0.5 - Math.random()});
var sid = jsPsych.randomization.randomID(5);
sid = sid.toUpperCase();
console.log(sid);

//-------------SETUP & INSTRUCTION BLOCKS---------------------------------------------

var consent = {
    "type": "html",
    "force_refresh": true,
    "url": "../views/src/external/consent.html",
    "cont_btn": "start",
    "check_fn": check_consent,
    data: {
      block:"consent"
    }
};
var codes = {
    type: 'survey-text',
    preamble: "<p>Please enter the following information from the mTurk task description</p>",
    questions: ["Session code: ", "Condition code: ","MTurk ID: "],
    data: {
      block:"codes"
    },
    on_finish: function(data){
      var i = JSON.parse(data.responses);
      var e = getQueryString('exp');
      session = i["Q0"];
      condition = i["Q1"];
      if (e != null) {experiment = e;}
      if (!session) {session = "override";} //default to override
      if (!condition) {condition = 0;} //default to condition with no scaffold
      console.log("experiment: "+experiment);
      console.log("session: "+session);
      console.log("condition: "+condition);
      jsPsych.data.addProperties({experiment:experiment});
      jsPsych.data.addProperties({session:session});
      jsPsych.data.addProperties({condition:condition});
    }
};
var instructions_turk = {
    "type": "html",
    "force_refresh": true,
    "url": "../views/src/external/instructions_turk.html",
    "cont_btn": "start",
    on_start: function(){
      scenarios=scenarios;
    },
    data: {
      block:"instructions_lab"
    }
};
var scenario_one = {
    type: 'single-stim',
    stimulus : 'img/'+scenarios[0]+'.png',
    choices: [13, 32],
    prompt: '<p style="font-style:italic;">Press enter to continue</p>',
    data: {
      block: "scenario-one"
    }
}
var scenario_two = {
    type: 'single-stim',
    stimulus : 'img/'+scenarios[1]+'.png',
    choices: [13, 32],
    prompt: '<p style="font-style:italic;">Press enter to continue</p>',
    data: {
      block: "scenario-two"
    }
  }
var scenario_draw = {
    type: 'single-stim',
    stimulus : 'img/jones.png',
    choices: [13, 32],
    prompt: '<p style="font-style:italic;">Press enter to continue</p>',
    data: {
      block: "scenario-draw"
    }
  }
var instructions_draw = {
      "type": "html",
      "force_refresh": true,
      "url": "../views/src/external/instructions_draw.html",
      "cont_btn": "start",
      "check_fn": check_draw,
      data: {
        block:"instructions_drawing"
      },
      on_start: function(){
        sid= sid;
    }
  };
var debrief = {
    "type": "html",
    "force_refresh": true,
    "url": "../views/src/external/debrief.html",
    "cont_btn": "start",
    data: {
      block: "debrief"
    }
};

//-------------SURVEY BLOCKS---------------------------------------------
var text_questions = ["What is your age?",
                      "In what country were you born?",
                    "What is your occupation?"];
var choice_questions = ["What is your first language?",
                        "What is your year in school?",
                        "What is your major area of study?",
                        "What is your gender?",
                        "Which of the graphs in the study did you find easier to use?"];
var lang_options = [ "English", "Spanish", "Mandarin or Cantonese", "Other"];
var year_options = ["First", "Second","Third","Fourth","Fifth","Graduate","Other"];
var major_options = ["Math or Computer Sciences","Social Sciences (incl. CogSci)", "Biomedical & Health Sciences",
                      "Natural Sciences","Engineering","Humanities","Fine Arts"];
var gender_options = ["Male","Female","Other"];
var graph_options = ["the first one (linear", "the second one (triangular)"]
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
    options: [lang_options, year_options,major_options,gender_options,graph_options],  // need one scale for every question on a page
    required: [true, true,true,true,true],   // set whether questions are required
    horizontal: true , // centres questions and makes options display horizontally
    data: {
      block: "demo-2"
    }
};

//-------------CODE TESTING BLOCKS ----------------------------------------------
var test_linear = {
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
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({helps:helps});
    jsPsych.data.addDataToLastTrial({answer:answer});

  },
  on_start: function(){
          graph= "linear";
          scenario = scenarios[0];
          scaffold = scaffolds[1];
          question = questions[14];
  }
}
var test_triangular = {
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
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({helps:helps});
    jsPsych.data.addDataToLastTrial({answer:answer});
  },
  on_start: function(){
          graph= "triangular";
          scenario = scenarios[0];
          scaffold = scaffolds[1];
          question = questions[14];
  }
}

var drawing_test1 = {
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
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({block:"drawingTest"});
    jsPsych.data.addDataToLastTrial({answer:answer});


  },
  on_start: function(){
          graph= "none";
          scenario = "jones";
          scaffold = scaffolds[0];
          question = "duration";
  }
}
var drawing_test2 = {
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
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({block:"drawingTest"});
    jsPsych.data.addDataToLastTrial({answer:answer});

  },
  on_start: function(){
          graph= "none";
          scenario = "jones";
          scaffold = scaffolds[0];
          question = "overlap";
  }
}
//-------------STIM BLOCKS-----------------------------------------------
var linear_scaffolded = {
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
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({helps:helps});
    jsPsych.data.addDataToLastTrial({block:"linear_scaffolded"});
    jsPsych.data.addDataToLastTrial({answer:answer});


  },
  timeline: [
      {on_start: function(){
          graph= "linear";
          scenario = scenarios[0];
          scaffold = scaffolds[condition];
          question = questions[0];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[condition];
        question = questions[1];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[condition];
        question = questions[2];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[condition];
        question = questions[3];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[condition];
        question = questions[4];
      }}
    ]
}
var linear_testing = {
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
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({helps:helps});
    jsPsych.data.addDataToLastTrial({block:"linear_testing"});
    jsPsych.data.addDataToLastTrial({answer:answer});

  },
  timeline: [
      {on_start: function(){
          graph= "linear";
          scenario = scenarios[0];
          scaffold = scaffolds[0];
          question = questions[5];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[6];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[7];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[8];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[9];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[10];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[11];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[12];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[13];
      }},
      {on_start: function(){
        graph= "linear";
        scenario = scenarios[0];
        scaffold = scaffolds[0];
        question = questions[14];
      }}
  ],
  randomize_order: true
}

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
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({helps:helps});
    jsPsych.data.addDataToLastTrial({block:"triangular_scaffolded"});
    jsPsych.data.addDataToLastTrial({answer:answer});
  },
  timeline: [
      {on_start: function(){
          graph= "triangular";
          scenario = scenarios[1];
          scaffold = scaffolds[condition];
          question = questions[0];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[condition];
        question = questions[1];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[condition];
        question = questions[2];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[condition];
        question = questions[3];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[condition];
        question = questions[4];
      }}
    ]
}
var triangular_testing = {
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
    jsPsych.data.addDataToLastTrial({scaffold:scaffold});
    jsPsych.data.addDataToLastTrial({correct:correct});
    jsPsych.data.addDataToLastTrial({clicked:clicked});
    jsPsych.data.addDataToLastTrial({helps:helps});
    jsPsych.data.addDataToLastTrial({block:"triangular_testing"});
    jsPsych.data.addDataToLastTrial({answer:answer});

  },
  timeline: [
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[5];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[6];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[7];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[8];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[9];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[10];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[11];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[12];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[13];
      }},
      {on_start: function(){
        graph= "triangular";
        scenario = scenarios[1];
        scaffold = scaffolds[0];
        question = questions[14];
      }}
  ],
  randomize_order: true
}
//-------------ESTABLISH THE TIMELINE -----------------------------------

var exp_timeline = [];
// exp_timeline.push(test_linear);
// exp_timeline.push(test_triangular);

//SETUP

// exp_timeline.push(phone);
// exp_timeline.push(consent);
exp_timeline.push(instructions_turk);
exp_timeline.push(codes);
// // // // //LINEAR MODEL
// exp_timeline.push(scenario_one);
// exp_timeline.push(linear_scaffolded);  //linear with scaffold q 1-5
// exp_timeline.push(linear_testing);  //linear without scaffold q 6-15
// // // //TRIANGULAR MODEL
exp_timeline.push(scenario_two);
exp_timeline.push(triangular_scaffolded);  //linear with scaffold q 1-5
exp_timeline.push(triangular_testing);  //linear without scaffold q 6-15
// // //DRAWING TRANSFER TEST
// exp_timeline.push(scenario_draw);
// exp_timeline.push(instructions_draw);
// exp_timeline.push(drawing_test1);
// exp_timeline.push(drawing_test2);
// // //WRAPUP
exp_timeline.push(text_survey);
exp_timeline.push(choice_survey);
// exp_timeline.push(debrief);


jsPsych.data.addProperties({
  subject: sid
});

jsPsych.init({
  fullscreen: true,
  timeline: exp_timeline,
  on_trial_start(){
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
