

//                      _      _                  __
//  _ __ ___   __ _  __| | ___| |__  _   _  __ _ / _| _____  __
// | '_ ` _ \ / _` |/ _` |/ _ \ '_ \| | | |/ _` | |_ / _ \ \/ /
// | | | | | | (_| | (_| |  __/ |_) | |_| | (_| |  _| (_) >  <
// |_| |_| |_|\__,_|\__,_|\___|_.__/ \__, |\__,_|_|  \___/_/\_\
//                                  |___/
//@amyraefox. 2017




//1: Set  dimensions of the canvas
var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

var mouseLog;

//2: Add the SVG container
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("class","ids")
    .attr("transform","translate(" + margin.left + "," + margin.top + ")")

d3.select("svg").append("g")
    .attr("class","traces");


//3: GET THE DATA
d3.json("../data/1-correct.json", function(error, data) {
    data.forEach(function(d) {
        d.orth_correct = d.orth_correct;
        d.correct = d.correct;
        d.axis = d.axis;
        d.impasse = d.impasse;
        d.explicit = d.explicit;
        d.question = d.question ;
        d.condition = d.condition;
        d.session = d.session ;
        d.subject = d.subject ;
        d.answer = d.answer;
        d.rt = d.rt;
        d.mouseLog = d.mouseLog;
        mouseLog = d.mouseLog;
    });

    //3A: Add the identifying containers
    d3.select(".ids")
          .data(data)
          .append("text")
          .attr("class","subect")
          .text( function (d) { return "subject: "+d.subject})
          .attr("x",50)
          .attr("y",100);

    d3.select(".ids")
          .data(data)
          .append("text")
          .attr("class","condition")
          .text( function (d) { return "condition: "+d.condition})
          .attr("x",50)
          .attr("y",120);

    d3.select(".ids")
          .data(data)
          .append("text")
          .attr("class","correct")
          .text( function (d) { return "tri_correct: "+d.correct})
          .attr("x",50)
          .attr("y",140)

    d3.select(".ids")
          .data(data)
          .append("text")
          .attr("class","orth_correct")
          .text( function (d) { return "orth_correct: "+d.orth_correct})
          .attr("x",50)
          .attr("y",160)

    d3.select(".ids")
          .data(data)
          .append("text")
          .attr("class","answer")
          .text( function (d) { return "answer: "+d.answer})
          .attr("x",50)
          .attr("y",180)

    // console.log(mouseLog);

    //reformat to array of json elements
    var jsonLog = [];
    mouseLog.forEach(function(d){
      var n = d.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
      n = n.substring(0, n.length - 1);
      n = JSON.parse(n);
      jsonLog.push(n);
    })

    console.log(jsonLog);

      // d3.select(".traces")
      // .append("line")
      // .attr("class","line")
      // .attr("id",1)
      // .attr("x1",jsonLog[1].x)
      // .attr("y1",jsonLog[1].y)
      // .attr("x2",jsonLog[60].x)
      // .attr("y2",jsonLog[60].y)
      //
      // console.log(jsonLog[1].x)
      // console.log(jsonLog[60].x)

    for (i = 1; i<jsonLog.length-1 ; i++){
      d3.select(".traces")
        .append("line")
        .attr("class","line")
        .attr("id","a"+i)
        .attr("x1",jsonLog[i].x)
        .attr("y1",jsonLog[i].y)
        .attr("x2",jsonLog[i+1].x)
        .attr("y2",jsonLog[i+1].y);
    }







});



// Using D3’s enter and exit selections, you can create new nodes for incoming
//data and remove outgoing nodes that are no longer needed.

// When data is bound to a selection, each element in the data array is paired with
// the corresponding node in the selection.
// If there are fewer nodes than data, the extra data elements form the enter selection,
// which you can instantiate by appending to the enter selection.

// d3.select("body")
//   .selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//   .enter().append("p")
//     .text(function(d) { return "I’m number " + d + "!"; });
//
//
// // Update…
// var p = d3.select("body")
//   .selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//     .text(function(d) { return d; });
//
// // Enter…
// p.enter().append("p")
//     .text(function(d) { return d; });
//
// // Exit…
// // p.exit().remove();
