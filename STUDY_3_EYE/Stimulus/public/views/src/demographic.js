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
//Experimental Design: x conditions (by scaffold) within subjects measure
//of problem solving performance using first linear graph then triangular
//model graph first 5 questions of each graph are scaffolded, remainder are
//not. Followed by manual drawing task and concludes with demographic survey
//and preferences before debrief
//---------------------------------------------------------------------


//---------------SETUP VARIABLES---------------------------------------
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
    required: [true, true,true,true,true],   // set whether questions are required
    horizontal: true , // centres questions and makes options display horizontally
    data: {
      block: "demo-2"
    },
    on_finish: function(data) {
      jsPsych.data.addDataToLastTrial({question:question});
      jsPsych.data.addDataToLastTrial({impasse:impasse});
      jsPsych.data.addProperties({condition:condition});
      console.log("question: "+question);
      console.log("impasse: "+impasse);
      console.log("condition: "+condition);

    }
};


//-------------ESTABLISH THE TIMELINE -----------------------------------

var exp_timeline = [];

//SETUP
exp_timeline.push(text_survey);
exp_timeline.push(choice_survey);



jsPsych.init({
  // fullscreen: true,
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
