//TODO: This seemed to mess stuff up... not sure WHY
// d3.selectAll(".tick line")
//   .attr("y2", 15)
//   .on("mouseout", function(d) {
//     var sibling = d3.select(this.nextElementSibling).text();
//     hovered = hovered+"-"+sibling;
//     console.log(hovered);
//    }) ;
// d3.selectAll(".tick text")
//   .attr("y", 20) ;


//-----------AXIS HELPER FUNCTIONS ---------------------------//
function drawXAxis(xAxis,title,x,y,min,max,range) {
  console.log("DRAWING X AXIS");

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
      .attr("y", margin.bottom -10 )
      .style("text-anchor", "end")
      .text(title);
}
function drawYAxis_Orthogonal (y,title){
  console.log("DRAWING Y AXIS ORTHOGONAL");
  var yaxis = svg.append("g")
    .attr("class","yaxis")
    .call(d3.axisLeft(y).tickSize(15))

    d3.select(".yaxis")
      .append("g")
      .attr("class","axisTitle")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height/2 + 50)
      .attr("y", -margin.left/2 -10 )
      .style("text-anchor", "end")
      .text(title);

  var yGrid = svg.append("g")
    .attr("class","ygrid");
}
function drawYAxis_Triangular (x,y,title,min,max,range){
  console.log("DRAWING Y AXIS TRIANGULAR");
  var yAxis = svg.append("g")
    .attr("class","yaxis")
    .append("line")
    .attr("x1",y(range/2))
    .attr("x2",0)
    .attr("y1",y(range))
    .attr("y2",y(0));

    d3.select(".yaxis")
      .append("g")
      .attr("class","axisTitle")
      .append("text")
      .attr("transform","rotate(-65) translate(-200,280)")
      .style("text-anchor", "end")
      .text(title);

  var yGrid = svg.append("g")
      .attr("class","ygrid");

  // console.log(range);
  for (i=1; i<range+1; i++){
    min.add(30,"minutes");
    max.subtract(30,"minutes");

    d3.select(".yaxis")
      .append("g")
      .attr("class","tick")
      .append("text")
      .attr("x",x(min)-35)
      .attr("y",y(i)+5)
      .text(i);

    d3.select(".yaxis")
      .append("g")
      .attr("class","tick")
      .append("line")
      .attr("x1",x(min)-20)
      .attr("x2",x(min))
      .attr("y1",y(i))
      .attr("y2",y(i));
  }
}

//-----------HORIZONTAL GRID HELPER FUNCTIONS ---------------------------//
function drawYGrid_Full (x,y,dmin,dmax,range){
    console.log("DRAWING FULL Y GRID");
    for (i=1; i<=range; i++){
      d3.select(".ygrid").append("g")
          .attr("class", "ygrid")
          .append("line")
          .attr("x1",x(dmin))
          .attr("x2",x(dmax))
          .attr("y1",y(i))
          .attr("y2",y(i));
    }
    // function make_y_gridlines(y) {
    //     return d3.axisLeft(y).ticks(graphLabel.length);}
    //
    // svg.append("g")
    //   .attr("class", "grid")
    //   .call(make_y_gridlines(y)
    //   .tickSize(-width)
    //   .tickFormat("");
}
function drawYGrid_Partial (x,y,min,max,range){
    for (i=1; i<=range; i++){
      // console.log(i+" "+range);
      max.subtract(30,"minutes");
      d3.select(".ygrid").append("g")
          .attr("class", "ygrid")
          .append("line")
          .attr("x1",x(min))
          .attr("x2",x(max))
          .attr("y1",y(i))
          .attr("y2",y(i));
    }
}
function drawYGrid_Inside (x,y,min,max,range){
  console.log("DRAWING INSIDE Y GRID: ");
  for (i=1; i<=range; i++)  {
    min.add(30,"minutes");
    max.subtract(30,"minutes");
    d3.select(".ygrid")
        .append("g")
        .attr("class", "grid")
        .append("line")
        .attr("x1",x(min)-20)
        .attr("x2",x(max))
        .attr("y1",y(i))
        .attr("y2",y(i));

    // d3.select(".yaxis")
    //   .append("g")
    //   .attr("class","tick")
    //   .append("text")
    //   .attr("x",x(tempdmin)-35)
    //   .attr("y",y(i)+5)
    //   .text(i);
    //
    // d3.select(".yaxis")
    //   .append("g")
    //   .attr("class","tick")
    //   .append("line")
    //   .attr("x1",x(tempdmin)-20)
    //   .attr("x2",x(tempdmin))
    //   .attr("y1",y(i))
    //   .attr("y2",y(i));
  }

}

//-----------VERTICAL GRID HELPER FUNCTIONS ---------------------------//
function drawXGrid_Full (x,y,min,max,range){

  var t0 = min.clone();
  var t1 = max.clone();
  var r = range;  // the range of the data values
  var g = r;      //number of gradiations in the grid system (number of tickmarks)
  var i = r/g;    //size of each interval in the grid system
  // console.log("t0: "+ t0.format("HH:mm")+" t1: "+t1.format("HH:mm")+" r: "+r+" g: "+g+" i: "+i);

  svg.append("g")
     .attr("class", "xgrid");


  for (n = 0; n < g; n++) {
      console.log("n: "+n+"-------------------");
      console.log(n*i);

      var x1 = t0.clone();
          x1 = x1.add(n*i,'hours');

      var x2 = x1.clone();
          x2 = x2.add(6,'hours');

      if (x2 > t1){
        x2 = t1;
      }
      y2 = x2.diff(x1,'minutes')/60*2;

      svg.selectAll(".xgrid")
        .append("line")
        .attr("class","rgrid")
        .attr("x1",x(x1))
        .attr("y1",y(0))
        .attr("x2",x(x2))
        .attr("y2",y(y2))

      x1 = t1.clone();
      x1 = x1.add(-n*i,'hours');

      x2 = x1.clone();
      x2 = x2.add(-6,'hours');

      if (x2 < t0){
        x2 = t0;
      }
      y2 = x1.diff(x2,'minutes')/60*2;

      svg.selectAll(".xgrid")
        .append("line")
        .attr("class","lgrid")
        .attr("x1",x(x1))
        .attr("y1",y(0))
        .attr("x2",x(x2))
        .attr("y2",y(y2))
      }
}//end drawFullX

function drawXGrid_Triangular (x,y,min,max,range){

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
        .attr("class","rgrid")
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
        .attr("class","lgrid")
        .attr("x1", x(x1))
        .attr("y1", y(0))
        .attr("x2",x(x2))
        .attr("y2",y(y2))
      }
}





//-----------DRAW THE INTERACTIVE SCAFFOLD LINES -------------//
function drawTriangleLeaders(x,y,start,mid,end,dur,min,leaders){

    /*NOTE: NEED TO MANUALLY SET MINIMUM HERE TOO -- FIX THIS*/
    var actualMin = moment("8:00","HH:mm");
    var actual = actualMin.add(dur/2,"hours");

    leaders.append ("line")
    .attr("class","starttime")
    .attr("x1",x(start))
    .attr("y1",y(0))
    .attr("x2",x(mid))
    .attr("y2",y(dur))

    leaders.append("circle")
    .attr("class","circle")
    .attr("cx", x(start))
    .attr("cy", y(0)+22);

    leaders.append("line")
    .attr("class", "endtime")
    .attr("x1",x(end))
    .attr("y1",y(0))
    .attr("x2",x(mid))
    .attr("y2",y(dur))

    leaders.append("circle")
    .attr("class","circle")
    .attr("cx", x(end))
    .attr("cy", y(0)+22);

    if (axis == "Triangular-XInside-YInside"){
      leaders.append("line")
      .attr("class","duration")
      .attr("x1",x(actual))
      .attr("y1",y(dur))
      .attr("x2",x(mid))
      .attr("y2",y(dur));

      leaders.append("circle")
      .attr("class","circle")
      .attr("cx", x(actual)-22)
      .attr("cy", y(dur));
    }
    else{
      leaders.append("line")
      .attr("class","duration")
      .attr("x1",x(min))
      .attr("y1",y(dur))
      .attr("x2",x(mid))
      .attr("y2",y(dur));

      leaders.append("circle")
      .attr("class","circle")
      .attr("cx", x(min)-10)
      .attr("cy", y(dur));
    }
}
function drawStaticLeaders(axis,staticLeaders,x,y){
  /*NOTE: NEED TO MANUALLY SET MINIMUM HERE TOO -- FIX THIS*/
  /*NOTE: COMMENTED OUT TEXT LABELS */
  var exampleMin = moment("12:00","HH:mm");
  var exampleMax = moment("17:00","HH:mm");
  var exampleMid = moment("14:30","HH:mm");
  var diagMid = moment("10:30","HH:mm");
  var min = moment("8:00","HH:mm");
  var dur = 5;

  staticLeaders.append ("line")
  .attr("class","scaffStarttime")
  .attr("x1",x(exampleMin))
  .attr("y1",y(0))
  .attr("x2",x(exampleMid))
  .attr("y2",y(dur));

  staticLeaders.append("circle")
  .attr("class","scaffCircle")
  .attr("cx", x(exampleMin))
  .attr("cy", y(0)+22);

  // staticLeaders.append("text")
  // .attr("class","scaffText")
  // .attr("x",x(exampleMin)-50)
  // .attr("y",y(0)+50)
  // .text("start");

  staticLeaders.append("line")
  .attr("class", "scaffEndtime")
  .attr("x1",x(exampleMax))
  .attr("y1",y(0))
  .attr("x2",x(exampleMid))
  .attr("y2",y(dur))

  staticLeaders.append("circle")
  .attr("class","scaffCircle")
  .attr("cx", x(exampleMax))
  .attr("cy", y(0)+22);

  // staticLeaders.append("text")
  // .attr("class","scaffText")
  // .attr("x",x(exampleMax)+15)
  // .attr("y",y(0)+50)
  // .text("end");

  if (axis == "Triangular-XInside-YInside"){
    staticLeaders.append("line")
    .attr("class","scaffDuration")
    .attr("x1",x(diagMid))
    .attr("y1",y(dur))
    .attr("x2",x(exampleMid))
    .attr("y2",y(dur))

    staticLeaders.append("circle")
    .attr("class","scaffCircle")
    .attr("cx", x(diagMid)-22)
    .attr("cy", y(dur));
  }
  else {
    staticLeaders.append("line")
    .attr("class","scaffDuration")
    .attr("x1",x(exampleMid))
    .attr("y1",y(dur))
    .attr("x2",x(min))
    .attr("y2",y(dur));

    staticLeaders.append("circle")
    .attr("class","scaffCircle")
    .attr("cx", x(min)-10)
    .attr("cy", y(dur));
  }
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
function drawTriangleModel(datafile, intersects, axis, scaffold, q) {

  console.log(axis);

  //---------CREATE LEADERS ELEMENT SO ITS ON THE BOTTOM------//
  var leaders = svg.append("g")
  .attr("class","leaders");

  var staticLeaders = svg.append("g")
    .attr("class","static-scaffold");

  //---------CREATE & DRAW DATA  ----------//
  d3.csv(datafile, function(error, data) {
      if (error) throw error;
      // format the data
      var count = data.length;
      var backup = [];
      var graphLabel=[[]];
      var dmin = moment("08:00","HH:mm");
      var dmax = moment("20:00","HH:mm");
      var range = 12;

      //PROCESS RAW DATA
      data.forEach(function(d) {
        //store the raw data in vars
        // d.events = d.events;
        // d.starttime = d.starttime;
        // d.endtime =d.endtime;

        d.startt = moment(d.starttime, "HH:mm");
        d.endt = moment(d.endtime, "HH:mm");
        d.duration =  d.endt.diff(d.startt,"minutes")/60;//duration in hours
        d.midpoint = moment(d.endt.clone().subtract(d.duration/2,'hours'));

        //setup arrays for labels and clicked answers
        clicked.push([d.events,"false"]) //add the datapoint to an clicked array as default not clicked
        graphLabel.push([d.events]);
        // backup.push([d.events,d.startt,d.midpoint,d.endt,d.duration]);

        //set min and max -- automatically -- WHY DOESN'T THIS WORK?!
        // dmin = moment.min(dmin, d.startt);
        // dmax = moment.max(dmax, d.endt);
        // range = dmax.diff(dmin,'minutes')/60;


        // console.log("LABEL: "+d.events);
        // console.log("DURATION: "+d.duration);
        // console.log("START: "+d.startt.format("HH:mm"));
        // console.log("MID: "+d.midpoint.format("HH:mm"));
        // console.log("END: "+d.endt.format("HH:mm"));

      });

      //square root of (half of range)squared + range squared
      var halfbottom = height/2 * height/2;
      var tall = height * height;
      var pyth = halfbottom + tall;
      var pyth = Math.sqrt(pyth);
      // console.log("pythL "+ pyth);
      // console.log("range"+ range);


      //--DRAW THE AXES & GRID ---------------------

      // set X AXIS graph scales, domains and ranges
      var x = d3.scaleTime()
        .range([0, width])
        .domain([dmin, dmax])

      //set the  number of ticks
      var xAxis = d3.axisBottom(x)
        .ticks(range*2);

      // set Y AXIS graph scales, domains and ranges
      var y = d3.scaleLinear()
        .domain([0, range]) //isoceles   (the data)
        .range([height, 0]);        //   (the position)
        // .domain([0, range*2]); //equilateral
        //   .domain([0, range]); //isoceles

      //draw x axis
      drawXAxis(xAxis,xAxisTitle,x,y,dmin,dmax,range);

      //draw y axis and grid
      if (axis == "Orthogonal-XInside-YFull"){ //condition 1
        drawYAxis_Orthogonal(y,yAxisTitle);
        drawYGrid_Full(x,y,dmin.clone(),dmax.clone(),range);
        drawXGrid_Triangular (x,y,dmin.clone(),dmax.clone(),range);
      }
      else if (axis == "Orthogonal-XInside-YPartial"){ //condition 2
        drawYAxis_Orthogonal(y,yAxisTitle);
        drawYGrid_Partial(x,y,dmin.clone(),dmax.clone(),range);
        drawXGrid_Triangular (x,y,dmin.clone(),dmax.clone(),range);

      }
      else if (axis == "Triangular-XInside-YInside") { //condition 3
        drawYAxis_Triangular(x,y,yAxisTitle,dmin.clone(),dmax.clone(),range)
        drawYGrid_Inside(x,y,dmin.clone(),dmax.clone(),range);
        drawXGrid_Triangular (x,y,dmin.clone(),dmax.clone(),range);
      }
      else if (axis == "Orthogonal-XInside-YInside") { //condition 4
        drawYAxis_Orthogonal(y,yAxisTitle);
        drawYGrid_Inside(x,y,dmin.clone(),dmax.clone(),range);
        drawXGrid_Triangular (x,y,dmin.clone(),dmax.clone(),range);
      }
      else if (axis == "Orthogonal-XFull-YFull") { //condition 5
        drawYAxis_Orthogonal(y,yAxisTitle);
        drawYGrid_Full(x,y,dmin.clone(),dmax.clone(),range);
        drawXGrid_Full (x,y,dmin.clone(),dmax.clone(),range);
      };


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
      .attr("cx", function(d) { return x(d.midpoint);})
      .attr("cy", function(d) { return y(d.duration);})
      .attr("r", 6)
      .attr("selected",false)
      .on("mouseover", function(d) {
        d3.select(this).transition()
           .duration(0);
          //  console.log(d);
          //  console.log("MIDPOINT: "+d.midpoint.format("HH:mm"));
          //  console.log("ENDTIME: "+d.endt.format("HH:mm"));
           if (intersects){drawTriangleLeaders(x,y,d.startt,d.midpoint,d.endt,d.duration,dmin,leaders);}
          //  console.log("MIDPOINT: "+d.midpoint.format("HH:mm"));
          //  console.log("ENDTIME: "+d.endt.format("HH:mm"));
        })
      .on("mouseout", function(d) {
        d3.selectAll(".starttime").remove();
        d3.selectAll(".endtime").remove();
        d3.selectAll(".duration").remove();
        d3.selectAll(".circle").remove();
        var sibling = d3.select(this.nextElementSibling).text();
        hovered = hovered+"-"+sibling;
        console.log(hovered);
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

     //remove every other tick label on x axis
     d3.selectAll(".xaxis").selectAll(".tick text").style("display", function (d, i)
     { return i % 2 ? "none" : "initial" });

     if (scaffold == 2 && q<6){ //explicit text-image scaffold
       drawStaticLeaders(axis,staticLeaders,x,y);
     }

  }); //END D3.CSV


}//end drawTriangleModel
