//TODO: scale svg to size of div
//TODO: make inScope pure
//TODO: figure out why active class is reported as opposite
//todo: FIX ERROR WITH DATA SET NOT UPDATING CORRECLTY - POSSIBLY INDEX ISSUE
var topMargin = 10,
    leftMargin = 10,
    iWidth = 10,
    iHeight = 10,
    iSpace = 12;

//set the data that is in scope
var inScope = {
  "nonimpasse":false,
  "impasse":false,
  "control":false,
  "static":false,
  "interactive":false
}

//load data from json file
var allData = d3.json("/data/final_items.json").then(function(data)
  {
    console.log("LOADING DATA: "+data.length+" records");
    console.log(data);
    // console.log("-------------------");
    render(data);
    // console.log(data.filter(function(d){return d.impasse ==1;}));

    //enable buttons once data is loaded
    $(':button').prop("disabled",false);

    //set button listeners with jquery
    $('#imp-none').click(function(){
      // console.log( "in event: "+ $('#imp-none').hasClass("active"));
      inScope.nonimpasse = !inScope.nonimpasse;
      render(data,"implicit-none")});
    $('#impasse').click(function(){
      // console.log( "in event: "+ $('#impasse').hasClass("active"));
      inScope.impasse = !inScope.impasse;
      render(data,"implicit-impasse")});
    $('#exp-none').click(function(){
      // console.log( "in event: "+ $('#exp-none').hasClass("active"));
      inScope.control = !inScope.control;
      render(data,"explicit-none")});
    $('#static').click(function(){
      // console.log( "in event: "+ $('#static').hasClass("active"));
      inScope.static = !inScope.static;
      render(data,"explicit-static")});
    $('#interactive').click(function(){
      // console.log( "in event: "+ $('#interactive').hasClass("active"));
      inScope.interactive = !inScope.interactive;
      render(data,"explicit-interactive")});
  }
);

function render(data){



  var dataFiltered ;

  // "orth_correct" : 0,
  // "correct" : 1,
  // "axis" : "full",
  // "impasse" : 1,
  // "explicit" : 2,
  // "q" : 1,
  // "question" : "starttime",
  // "condition" : "211",
  // "session" : "pinecone",
  // "subject" : "O577M",
  // "rt" : 51599,
  // "answer" : "F"

  var impasse = inScope.nonimpasse + inScope.impasse
  // impasse : (1,2)

  var explicit = inScope.control + inScope.explicit +inScope.interactive
  // explicit : (1,2,3)


  //FILTER ON IMPASSE TOGGLES
  switch (impasse) {
    case 2:
      dataFiltered = data.filter(function (d) {
        return d //don't filter
      });
      break;
    case 1:
      if (inScope.nonimpasse == 1) {
        dataFiltered = data.filter(function (d) {
        return d.impasse == 1
        }); }
      else if (inScope.impasse == 1) {
        dataFiltered = data.filter(function (d) {
        return d.impasse == 2
        }); }
      else {console.log("ERROR!");}
      break;
    case 0:
      //return no data
      dataFiltered = data.filter(function (d) {
      return d.impasse == 0 //invalid value
      });
      break;
    default:
    console.log("IMPASSE BUTTONS ERROR");
  }

  // "nonimpasse":false,
  // "impasse":false,
  // "control":false,
  // "static":false,
  // "interactive":false


  // var data3 = data2.concat(data1)


  //Create nested data structure
  console.log("RENDER DATA: "+ dataFiltered.length+ " records");
  console.log(dataFiltered);
  console.log("-------------------");

  var dataBySubject = d3.nest()
    .key(function(d) { return d.subject; })
    .entries(dataFiltered)

  console.log(dataBySubject);
  // console.log(dataBySubject[0].values[0].subject);

  //CREATE SUBJECTS//---------------------
  var t = d3.transition()
        .duration(750);

  // JOIN new data with old elements.
  var subjects = d3.select("svg")
      // .selectAll(".subject")
      .selectAll("g")
      .data(dataBySubject, function(d) { return d; });

  //EXIT -- remove elements not in new data
  subjects.exit()
    .attr("class","exit")
    .transition(t)
    .style("fill-opacity", 1e-6)
    .remove();


  // UPDATE old elements present in new data.
  subjects.attr("class", "update")
  //    .style("fill-opacity", 1)
  //    .transition(t)

  //ENTER new elements present in new data.
  subjects.enter().append("g")
    .attr("class","enter")
    // .attr("class","subject")
    .attr("subject",function(d){return "S"+d.key;})
    .append('text')
    .text(function(d){return d.key;})
    .attr("y",function(d,i) {return ((i+1)*iSpace-6)+topMargin;})
    .attr("x",leftMargin)


 //--------------------------------------

  //CREATE ITEMS//---------------------
  for ( i = 0; i < dataBySubject.length; i++){

    //Update
    var items = d3.select("svg")
       .selectAll('g[subject=S'+dataBySubject[i].key+']')
       .selectAll(".item")
       .data(dataBySubject[i].values);

    //Enter
    items.enter().append("rect")
       .attr("class",function(d){return "item "+"a"+d.correct;})
       .attr("subject",function(d){return dataBySubject[i].key;})
       .attr("q",function(d){return d.q;})
       .attr("session", function(d) { return d.session;})
       .attr("rt", function(d) { return d.rt;})
       .attr("tri", function(d) { return d.correct;})
       .attr("orth", function(d) { return d.orth_correct;})
       .attr("explicit", function(d) { return d.explicit;})
       .attr("impasse", function(d) { return d.impasse;})
       .attr("x", function(d) {return (d.q * iSpace) + leftMargin*5} )
       .attr("y", (i * iSpace)+ topMargin )
       .attr("width",iWidth)
       .attr("height", iHeight)

    //Exit
    items.exit().remove();
    //--------------------------------------
  }
 }//end render(data)


    //var svg = d3.select("svg")
    //
    // margin = {top: 20, right: 20, bottom: 30, left: 40},
    // width = +svg.attr("width") - margin.left - margin.right,
    // height = +svg.attr("height") - margin.top - margin.bottom,
    // g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
