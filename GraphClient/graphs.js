
//-----------AXIS HELPER FUNCTIONS ---------------------------//
function drawXAxis(xAxis,title,x,y,min,max,range) {

  //DRAW THE X AXIS
  var xaxis = svg.append("g")
      .attr("class","xaxis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
      // .call(d3.axisBottom(x));

      d3.select(".xaxis")
        .append("g")
        .attr("class","axisTitle")
        .append("text")
        .attr("x", width/1.5 )
        .attr("y", margin.bottom -5 )
        .style("text-anchor", "end")
        .text(title);

  //DRAW THE X GRID
  var t0 = min;
  var t1 = max;
  var r = range;  // the range of the data values
  var g = r;      //number of gradiations in the grid system (number of tickmarks)
  var i = r/g;    //size of each interval in the grid system
  // console.log("t0: "+ t0.format("HH:mm")+" t1: "+t1.format("HH:mm")+" r: "+r+" g: "+g+" i: "+i);

  svg.append("g")
     .attr("class", "xgrid");

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

      svg.selectAll(".xgrid")
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

      svg.selectAll(".xgrid")
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
function drawOrthogonalYAxis(y,title,graphLabel){

  //DRAW THE Y AXIS
  var yaxis = svg.append("g")
    .attr("class","yaxis")
    .call(d3.axisLeft(y));

    d3.select(".yaxis")
        .append("g")
        .attr("class","axisTitle")
        .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height/2 + 50)
    .attr("y", -margin.left/2 -10 )
    .style("text-anchor", "end")
    .text(title);

    function make_y_gridlines(y) {
      return d3.axisLeft(y)
          .ticks(graphLabel.length)
    }

    svg.append("g")
      .attr("class", "ygrid")
      .call(make_y_gridlines(y)
        .tickSize(-width)
        .tickFormat("")
      )
}
function drawDiagonalYAxis(y,x,dmin,dmax,title,graphLabel,range){

  var yAxis = svg.append("g")
      .attr("class","yaxis")
      .append("line")
      .attr("x1",y(range/2)-15)
      .attr("x2",0-15)
      .attr("y1",y(range))
      .attr("y2",y(0));

  d3.select(".yaxis")
      .append("g")
      .attr("class","axisTitle")
      .append("text")
      .attr("transform", "rotate(-62), translate(110,255)")
      .attr("x", -height/2 + 50)
      .attr("y", -margin.left/2 -10 )
      .style("text-anchor", "end")
      .text(yAxisTitle);

  var yGrid = svg.append("g")
      .attr("class","ygrid");



console.log(range);
  for (i=1; i<range; i++)
  {
    dmin.add(30,"minutes");
    dmax.subtract(30,"minutes");
    d3.select(".ygrid")
        .append("g")
        .attr("class", "grid")
        .append("line")
        .attr("x1",x(dmin)-25)
        .attr("x2",x(dmax))
        .attr("y1",y(i))
        .attr("y2",y(i));

    d3.select(".yaxis")
      .append("g")
      .attr("class","tick")
      .append("text")
      .attr("x",x(dmin)-30)
      .attr("y",y(i))
      .text(i);

  }



  //  svg.append("text")
  //   .attr("transform", "rotate(-62), translate(110,255)")
  //    .attr("x", -height/2 + 50)
  //    .attr("y", -margin.left/2 -10 )
  //    .style("font-weight","bold")
  //    .style("text-anchor", "end")
  //    .text(yAxisTitle);
   //
    //  function make_y_gridlines(y) {
    //    return d3.axisLeft(y)
    //        .ticks(graphLabel.length)
    //  }
     //
    //  svg.append("g")
    //    .attr("class", "ygrid")
    //    .call(make_y_gridlines(y)
    //      .tickSize(-width)
    //      .tickFormat("")
    //    )

}






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

//-----------GRAPH DRAWING FUNCTIONS ------------------------//
function drawTriangleModel(datafile, scaffold, axis) {

  console.log(axis);

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

      //PROCESS RAW DATA
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


      //square root of (half of range)squared + range squared
      var halfbottom = height/2 * height/2;
      var tall = height * height;
      var pyth = halfbottom + tall;
      var pyth = Math.sqrt(pyth);
      console.log("pythL "+ pyth);
      console.log("range"+ range);


      //--DRAW THE X AXIS ---------------------
      // set X AXIS graph scales, domains and ranges
      var x = d3.scaleTime()
        .range([0, width])
        .domain([dmin, dmax])

      //set the  number of ticks
      var xAxis = d3.axisBottom(x)
        .ticks(range);

      // set Y AXIS graph scales, domains and ranges
      var y = d3.scaleLinear()
        .domain([0, range]) //isoceles   (the data)
        .range([height, 0]);        //   (the position)
        // .domain([0, range*2]); //equilateral

    // var y = d3.scaleLinear().clamp(true)
    //   .range([height, 0])
    //   // .domain([0, range*2]); //equilateral
    //   .domain([0, range]); //isoceles


// var y = d3.scaleLinear().clamp(true)
//   .range([height, 0])
//   // .domain([0, range*2]); //equilateral
//   .domain([0, range]); //isoceles



    drawXAxis(xAxis,xAxisTitle,x,y,dmin,dmax,range);

    //DRAW THE AXES
    if (axis == "orthogonal") {drawOrthogonalYAxis(y,yAxisTitle,graphLabel);}
    if (axis == "diagonal") {drawDiagonalYAxis(y,x,dmin,dmax,yAxisTitle,graphLabel,range)};



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
      .text(function(d) { return d.events; })
      .on("mouseout", function(d){
        var sibling = d3.select(this).text();
        hovered = hovered+"-"+sibling;
        console.log(hovered);
      });

      // drawTriangleLeaders(x,y,backup[8][1],backup[8][2],backup[8][3],backup[8][4],dmin);
      // $(".leaders").css("visibility","hidden");
    //record hover on labels
    d3.selectAll(".tick").select("text")
      .on("mouseout", function(d) {
        var sibling = d3.select(this).text();
        hovered = hovered+"-"+sibling;
        console.log(hovered);
     });

  }); //END D3.CSV


}//end drawTriangleModel