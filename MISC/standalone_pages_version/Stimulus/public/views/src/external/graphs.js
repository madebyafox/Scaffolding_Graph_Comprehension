
//-----------AXIS HELPER FUNCTIONS ---------------------------//
function drawXAxis(xAxis,title) {
  // draw the x Axis
  var xaxis = svg.append("g")
      .attr("class","xaxis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
      // .call(d3.axisBottom(x));

  // draw the x axis title
  svg.append("text")
      .attr("x", width/2 + 120)
      .attr("y", height + margin.bottom - 5)
      .style("font-weight","bold")
      .style("text-anchor", "end")
      .text(title);
}
function drawYAxis(y,title){
  // draw the y Axis
  svg.append("g")
    .attr("class","yaxis")
    .call(d3.axisLeft(y));

  // draw the x axis title
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height/2 + 50)
    .attr("y", -margin.left/2 -10 )
    .style("font-weight","bold")
    .style("text-anchor", "end")
    .text(title);
}

//-----------ANSWER HELPER FUNCTIONS ------------------------//
function toggleAnswer(x) {
  // console.log("before"+ clicked);
  var middle = [];
  var val;
  // console.log(x);
  var l = clicked.length;
  for (i = 0; i<l; i++)
  {
    middle = clicked[i]
    // console.log( middle );
    if (middle[0] == x )
    { val = middle[1];
      if (val == 'true'){
        clicked[i] = [x,'false'];}
      else {
        clicked[i] = [x,'true']; }
      // console.log("found it in: "+i);
      break;
    }
  }
  // console.log(clicked)
}

//-----------SCAFFOLD DRAWING FUNCTIONS ----------------------//
//DRAW DESCRIPTION SCAFFOLDS
function drawWhatDescription(graph){
  var description = svg.append("g")
      .attr("class","scaffold");
  switch (graph){
    case "linear":
      description.append("text")
        .attr("x",20)
        .attr("y",100)
        .text("line segment: an interval of time");

      description.append("text")
        .attr("x",20)
        .attr("y",120)
        .text("Left-most intersection with x-axis: the start of the interval");

      description.append("text")
        .attr("x",20)
        .attr("y",140)
        .text("Right-most intersection with x-axis: the end of the interval");

      description.append("text")
        .attr("x",20)
        .attr("y",160)
        .text("The intersection with y-axis: the label of the interval");
      break;
    case "triangular":
      description.append("text")
        .attr("x",20)
        .attr("y",100)
        .text("Point: an interval of time");
      description.append("text")
        .attr("x",20)
        .attr("y",120)
        .text("Left-most intersection with x-axis (following triangular gridline): the start of the interval");
      description.append("text")
        .attr("x",20)
        .attr("y",140)
        .text("Right-most intersection with x-axis (following triangular gridline): the end of the interval");
      description.append("text")
        .attr("x",20)
        .attr("y",160)
        .text("Intersection with y-axis: the duration of the interval");
      break;
  }
}
function drawHowDescription(graph){
  var description = svg.append("g")
      .attr("class","scaffold");
  switch (graph){
    case "linear":
      description.append("text")
        .attr("x",20)
        .attr("y",100)
        .text("Start: follow the left-most gridline to the intersection with the x-axis");
      description.append("text")
        .attr("x",20)
        .attr("y",120)
        .text("End: follow the right-most gridline to the intersection with the x-axis");
      description.append("text")
        .attr("x",20)
        .attr("y",140)
        .text("Duration: subtract the start from the end, or find the length of the line");
      description.append("text")
        .attr("x",20)
        .attr("y",160)
        .text("Label: follow the horizontal gridline to the intersection with the y-axis");
        break;
    case "triangular":
      description.append("text")
          .attr("x",20)
          .attr("y",100)
          .text("Start: follow the left-most gridline to the intersection with the x-axis");
      description.append("text")
        .attr("x",20)
        .attr("y",120)
        .text("End: follow the right-most gridline to the intersection with the x-axis");
      description.append("text")
        .attr("x",20)
        .attr("y",140)
        .text("Duration: find the intersection of the point with the y-axis");
      description.append("text")
        .attr("x",20)
        .attr("y",160)
        .text("Label: The text above the point");
        break;
  }
}
//note: static intersect scaffold is image in stimulus.html
//note: interactive intersect scaffold is 'leaders' hover in each model
//NOT WORKING
// function drawHandles() {
//   //draw containers for the handles
//   var xslider = d3.select(".xaxis")
//       .append("g")
//       .attr("class", "track");
//   var yslider = d3.select(".yaxis")
//       .append("g")
//       .attr("class", "track");
//
//   //draw the handle controls
//   var startHandle = xslider.append("circle")
//       .attr("cx", x.range()[0] )
//       .attr("cy", 0)
//       .attr("r", 6)
//       .style("fill", "black")
//       .attr("class","startHandle")
//       .call(d3.drag()
//           .on("start", dragstarted)
//           .on("drag", xdragged)
//           .on("end", dragended));
//   var endHandle = xslider.append("circle")
//       .attr("cx", x.range()[1] )
//       .attr("cy", 0)
//       .attr("r", 6)
//       .style("fill", "black")
//       .attr("class","endHandle")
//       .call(d3.drag()
//           .on("start", dragstarted)
//           .on("drag", xdragged)
//           .on("end", dragended));
//   var durHandle = yslider.append("circle")
//       .attr("cx", 0)
//       .attr("cy", y.range()[1])
//       .attr("r", 6)
//       .style("fill", "black")
//       .attr("class","durHandle")
//       .call(d3.drag()
//           .on("start", dragstarted)
//           .on("drag", ydragged)
//           .on("end", dragended))
//           .on("click", clicked);
//
//   //helper functions to handle mouse ixn w/ handles
//   function clicked(d) {
//     d3.select(this).raise().classed("fixed", true);
//     d3.select(this).style("fill","red");
//   }
//   function dragstarted(d) {
//     d3.select(this).raise().classed("active", true);
//     d3.select(this).style("fill","yellow");
//   }
//   function xdragged(d) {
//     d3.select(this).attr("cx", x(x.invert(d3.event.x)));
//     moveDuration();
//   }
//   function ydragged(d) {
//     d3.select(this).attr("cy", y(y.invert(d3.event.y)));
//   }
//   function dragended(d) {
//     d3.select(this).classed("active", false);
//   }
//   function moveDuration() {
//     var startTime = x.invert(d3.select(".startHandle").attr("cx"));
//     var endTime = x.invert(d3.select(".endHandle").attr("cx"));
//     var duration = endTime - startTime;
//     d3.select(".durHandle").attr("cy",y(duration));
//   }
// }
// function drawIntervals(){
//   computeIntervals(4); //example
//
//   function computeIntervals(d) {
//     var intervals = [];
//     var max = x.domain()[1];
//     var min = x.domain()[0];
//     var start, end;
//     var i = max;
//     //compute all intervals of duration d
//     while (i >= 0){
//       end = i;
//       start = end - d;
//       if (start >= min) {
//         intervals.push([i,start]);
//       }
//       i=i-1;
//     }
//     var i = intervals.length;
//     //draw each interval
//     while (i > 0)
//     {
//       var interval = intervals[i-1];
//       drawTriangle(interval[1],interval[0]);
//       i = i-1;
//       console.log(interval);
//     }
//   }
//
//   var intervalShading = svg.append("g")
//       .attr("class","intervals");
//
//   function drawTriangle(a,b) {
//     var testData = [
//       [ x(a),y(0)],
//       [ x(b),y(0)],
//       [ x(((b-a)/2)+a), y((b-a))],
//       [ x(a),y(0)]
//     ];
//     // console.log(testData)
//     svg.selectAll(".path.line")
//         .data([testData])
//         .enter().append("path")
//         .style("fill", "#ff0000")
//         .style("opacity","0.5")
//         .attr("class", "line")
//         .attr("d", d3.line());
//   }
// }

//-----------GRAPH DRAWING FUNCTIONS ------------------------//
function drawTriangleModel(datafile, scaffold) {

  //---------HELPER FUNCTIONS -----------------------//
  function drawTriangleLeaders(x,y,start,mid,end,dur,min){
    var leaders = svg.append("g")
    .attr("class","leaders");

    leaders.append ("line")
    .attr("class","starttime")
    .attr("x1",x(start))
    .attr("y1",y(0))
    .attr("x2",x(mid))
    .attr("y2",y(dur))

    leaders.append("line")
    .attr("class", "enddtime")
    .attr("x1",x(end))
    .attr("y1",y(0))
    .attr("x2",x(mid))
    .attr("y2",y(dur))

    leaders.append("line")
    .attr("class","duration")
    .attr("x1",x(min))
    .attr("y1",y(dur))
    .attr("x2",x(mid))
    .attr("y2",y(dur))
  }
  function drawTriangleGrid(x,y,min,max,range) {
    var t0 = min;
    var t1 = max;
    var r = range;  // the range of the data values
    var g = r;      //number of gradiations in the grid system (number of tickmarks)
    var i = r/g;    //size of each interval in the grid system
    // console.log("t0: "+ t0.format("HH:mm")+" t1: "+t1.format("HH:mm")+" r: "+r+" g: "+g+" i: "+i);

    svg.append("g")
       .attr("class", "tgrid");

    for (n = 0; n < g; n++) {
        // console.log("n: "+n+"-------------------");
        // console.log(n*i);
        // console.log("t0 is: "+t0.format("HH:mm"));
        var x1 = moment(t0);
            x1 = x1.add(n*i,'hours');
        // console.log("x1: "+x1.format("HH:mm"));
        var diff  = (t1.diff(x1,'minutes')/60)/2; //difference in fraction of hours
        // console.log("difference : "+diff);
        var x2 = moment(x1);
            x2 = x2.add(diff,'hours');
        // console.log("x2: "+x2.format("HH:mm"));
        var y2 = x2.diff(x1,"minutes")*2/60;

        svg.selectAll(".tgrid")
          .append("line")
          .attr("class","grid")
          .attr("x1", x(x1))
          .attr("y1", y(0))
          .attr("x2",x(x2))
          .attr("y2", y(y2))

        x1 = moment(t1);
        x1 = x1.subtract(n*i,'hours');
        diff  = (x1.diff(t0,'minutes')/60)/2; //difference in fraction of hours
        x2 = moment(t0);
        x2 = x2.add(diff,'hours');
        var x3 = moment(t0);
            x3 = x3.add(n*i,'hours');
        y2 = t1.diff(x3,"minutes")/60;

        svg.selectAll(".tgrid")
          .append("line")
          .attr("class","grid")
          // .attr("x1", x(t1-n*i))
          .attr("x1", x(x1))
          .attr("y1", y(0))
          // .attr("x2", x( ((t1-n*i) - (t0)) /2 +t0) )
          .attr("x2",x(x2))
          // .attr("y2", y( (t1 - (t0+n*i) )))
          .attr("y2",y(y2))
    }
  }

  //---------CREATE & DRAW DATA  ----------//
  d3.csv(datafile, function(error, data) {
      if (error) throw error;
      // format the data
      var count = data.length;
      var backup = [];
      var graphLabel=[[]];
      var dmin = moment("11:59","HH:mm");  //create a new dummy xmin set to 11:59
      var dmax = moment("00:00","HH:mm");  //create a new dummy xmin set to 00:00
      var range = 0; //dummy for time range

      data.forEach(function(d) {
        //store the raw data in vars
        d.events = d.events;
        d.starttime = d.starttime;
        d.endtime =d.endtime;
        //create time objects for start and end time
        d.startt = moment(d.starttime, "HH:mm");
        d.endt = moment(d.endtime, "HH:mm");
        d.duration =  d.endt.diff(d.startt,"minutes");
        d.duration = d.duration/60; //duration in hours
        // console.log("start: "+d.startt.format("HH:mm")+" end: "+d.endt.format("HH:mm")+"duration: "+d.duration);
        d.midpoint = d.endt.clone();
        d.midpoint = d.midpoint.subtract(d.duration/2,'hours');
        // console.log("midpoint: "+d.midpoint.format("HH:mm"));
        //setup arrays for labels and clicked answers
        clicked.push([d.events,"false"]) //add the datapoint to an clicked array as default not clicked
        graphLabel.push([d.events]);
        backup.push([d.events,d.startt,d.midpoint,d.endt,d.duration]);
        //set min and max
        dmin = moment.min(dmin, d.startt)
        dmax = moment.max(dmax, d.endt)
        range = dmax.diff(dmin,'minutes')/60;
        // console.log("range in minutes: "+range);
        // console.log("current min: "+dmin.format("HH:mm"));
        // console.log("current max: "+dmax.format("HH:mm"));
        // console.log("current range: "+range);
      });

    // set graph scales, domains and ranges
    var x = d3.scaleTime()
      .range([0, width])
      .domain([dmin, dmax])
    //set the  number of ticks
    var xAxis = d3.axisBottom(x)
      .ticks(range);
    var y = d3.scaleLinear().clamp(true)
      .range([height, 0])
      // .domain([0, range*2]); //equilateral
      .domain([0, range]); //isoceles
    drawXAxis(xAxis,xAxisTitle);
    drawYAxis(y,yAxisTitle);
    drawTriangleGrid(x,y,dmin,dmax,range);
    function make_y_gridlines(y) {
      return d3.axisLeft(y)
          .ticks(graphLabel.length)
    }
    svg.append("g")
      .attr("class", "grid")
      .call(make_y_gridlines(y)
        .tickSize(-width)
        .tickFormat("")
      )
    // draw the data
    var node = svg.append("g")
                  .attr("class","data")
                  .selectAll(".dot")
                  .data(data)
                  .enter()
                  .append("g");
    //draw the data points
    var dot = node.append("circle")
      .attr("class", "dot")
      .attr("cx", function(d) { return x(d.midpoint); })
      .attr("cy", function(d) { return y(d.duration); })
      .attr("r", 6)
      .attr("selected",false)
      .on("mouseover", function(d) {
        d3.select(this).transition()
           .duration(0);
          if (intersects){drawTriangleLeaders(x,y,d.startt,d.midpoint,d.endt,d.duration,dmin);}
        })
      .on("mouseout", function(d) {
       d3.selectAll(".leaders").remove();
      //  var state =  d3.select(this).attr("selected");
      //  if (state == 'true') {
      //    d3.select(this).transition()
      //         .duration(0)
      //         .style("fill", "green");
      //            }
      //  else {
      //    d3.select(this).transition()
      //         .duration(0)
      //         .style("fill", "black");
      //  }
      })
      .on("click", function(d) {
        if(colorClick) {

          var status =  d3.select(this).attr("selected");
          // console.log(status);
          if (status == 'true')
          {
            d3.select(this).transition()
                 .duration(0)
                 .style("fill", "black")
                 .attr("selected",false);
            toggleAnswer(d.events);
          }
          else {
            d3.select(this).transition()
              .duration(0)
              .style("fill", "green")
              .attr("selected",true);
            toggleAnswer(d.events);
          }
        }
      });
    //draw the data labels
    node.append("text")
      .attr("class","tmlabel")
      .attr("x", function(d) { return x(d.midpoint) - 5; })
      .attr("y", function(d) { return y(d.duration) - 8; })
      .text(function(d) { return d.events; });

      // drawTriangleLeaders(x,y,backup[8][1],backup[8][2],backup[8][3],backup[8][4],dmin);
      // $(".leaders").css("visibility","hidden");
  });


}//end drawTriangleModel
function drawLinearModel(datafile, scaffold) {

  //---------HELPER FUNCTIONS -----------------------//
  function drawLinearLeaders(x,y,label,start,end){
    var leaders = svg.append("g")
      .attr("class","leaders");

    leaders.append ("line")
      .attr("class","starttime")
      .attr("x1",x(start))
      .attr("y1",y(label))
      .attr("x2",x(start))
      .attr("y2",height)

    leaders.append("line")
      .attr("class", "enddtime")
      .attr("x1",x(end))
      .attr("y1",height)
      .attr("x2",x(end))
      .attr("y2",y(label))
  }
  function drawLinearGrid(x,y,range,graphLabel){
    // gridlines in x axis function
    function make_x_gridlines() {
      return d3.axisBottom(x)
          .ticks(range)
    }
    // gridlines in y axis function
    function make_y_gridlines() {
      return d3.axisLeft(y)
          .ticks(graphLabel.length)
    }
    // add the X gridlines
    svg.append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_gridlines()
          .tickSize(-height)
          .tickFormat("")
        )

    // add the Y gridlines
    svg.append("g")
      .attr("class", "grid")
      .call(make_y_gridlines()
        .tickSize(-width)
        .tickFormat("")
      )
  }

  //---------CREATE & DRAW DATA  ----------//
  d3.csv(datafile, function(error, data) {
      if (error) throw error;

      // format the data
      var count = data.length;
      var graphLabel=[[]];
      var dmin = moment("11:59","HH:mm");  //create a new dummy xmin set to 11:59
      var dmax = moment("00:00","HH:mm");  //create a new dummy xmin set to 00:00
      var range = 0; //dummy for time range

      data.forEach(function(d) {
        //store the raw data in vars
        d.events = d.events;
        d.starttime = d.starttime;
        d.endtime =d.endtime;
        //create time objects for start and end time
        d.startt = moment(d.starttime, "HH:mm");
        d.endt = moment(d.endtime, "HH:mm");
        // console.log("start: "+d.startt.format("HH:mm")+" end: "+d.endt.format("HH:mm"));
        d.duration =  d.endt.diff(d.startt,"minutes");
        // console.log("duration: "+d.duration);
        d.midpoint = d.endt.clone();
        d.midpoint = d.midpoint.subtract(d.duration/2,'minutes');
        // console.log("midpoint: "+d.midpoint.format("HH:mm"));
        //setup arrays for labels and clicked answers
        clicked.push([d.events,"false"]) //add the datapoint to an clicked array as default not clicked
        graphLabel.push([d.events]);
        //set min and max
        dmin = moment.min(dmin, d.startt)
        dmax = moment.max(dmax, d.endt)
        range = dmax.diff(dmin,'hours');
        // console.log("current min: "+dmin.format("HH:mm"));
        // console.log("current max: "+dmax.format("HH:mm"));
        // console.log("current range: "+range);
      });

    // set graph scales, domains and ranges
    var x = d3.scaleTime()
      .range([0, width])
      .domain([dmin, dmax])
    //set the  number of ticks
    var xAxis = d3.axisBottom(x)
      .ticks(range);
    var y = d3.scalePoint()
      .range([height, 0])
      .domain(graphLabel);
    drawXAxis(xAxis,xAxisTitle);
    drawYAxis(y,yAxisTitle);
    drawLinearGrid(x,y,range,graphLabel);
    // draw the data
    var node = svg.append("g")
                  .attr("class","data")
                  .selectAll(".segment")
                  .data(data)
                  .enter()
                  .append("g");
    //draw the data points
    var dot = node.append("line")
      .attr("class", "segment")
      .attr("x1", function(d) { return x(d.startt); })
      .attr("y1", function(d) { return y(d.events); })
      .attr("x2", function(d) { return x(d.endt); })
      .attr("y2", function(d) { return y(d.events); })
      .attr("selected",false)
      .on("mouseover", function(d) {
        d3.select(this).transition()
           .duration(0);
          if (intersects){drawLinearLeaders(x,y,d.events,d.startt, d.endt);}
        })
      .on("mouseout", function(d) {
       d3.selectAll(".leaders").remove();
      //  var state =  d3.select(this).attr("selected");
      //  if (state == 'true') {
      //    d3.select(this).transition()
      //         .duration(0)
      //         .style("fill", "green");
      //            }
      //  else {
      //    d3.select(this).transition()
      //         .duration(0)
      //         .style("fill", "black");
      //  }
      })
      .on("click", function(d) {
        if(colorClick) {
          var status =  d3.select(this).attr("selected");
          // console.log(status);
          if (status == 'true')
          {
            d3.select(this).transition()
                 .duration(0)
                 .style("stroke", "black")
                 .attr("selected",false);
            toggleAnswer(d.events);
          }
          else {
            d3.select(this).transition()
              .duration(0)
              .style("stroke", "green")
              .attr("selected",true);
            toggleAnswer(d.events);
          }
        }
      });

  });
}//end drawLinearModel
