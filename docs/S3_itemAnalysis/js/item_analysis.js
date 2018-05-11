//TODO: scale svg to size of div
//TODO: figure out why active class is reported as opposite
//TODO: change modal size

var mysvg = d3.select("svg");
var topMargin = 10,
    leftMargin = 10,
    iWidth = 10,
    iHeight = 10,
    vSpace = 5;
    hSpace = 5;
var inScopeImpasse = [true,true];
var inScopeExplicit = [true,true,true];
var questions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//for global data access only
var mydata ;
var mymappings ;

//LOAD DATA
d3.queue()
    .defer(d3.json, "../S3_itemAnalysis/data/final_items.json")
    .defer(d3.csv, "../S3_itemAnalysis/data/recordings_mapping.csv")
    .await(visualize);

function filter(data){

  //TRANSFORM t/f button toggle value array to array of indices that have true values
  impasseCriteria = inScopeImpasse.reduce(function(a, e, i) {
    if (e === true)
        a.push(i+1); //add 1 b/c condition values start at 1 not 0
    return a;
    }, []);

  //TRANSFORM t/f button toggle value array to array of indices that have true values
  explicitCriteria = inScopeExplicit.reduce(function(a, e, i) {
    if (e === true)
        a.push(i+1); //add 1 b/c condition values start at 1 not 0
    return a;
    }, []);

  //FILTER data based on the true array values
  return data.filter(function (d) {
    if (
        (d.impasse == impasseCriteria[0]  || d.impasse == impasseCriteria[1])
        &
        (d.explicit == explicitCriteria[0] || d.explicit == explicitCriteria[1] || d.explicit == explicitCriteria[2])
      )
      {return d;}
    })
    // console.log(impasseCriteria);
    // console.log(explicitCriteria);
}

function render(dataFiltered){

  console.log("RENDER DATA: "+ dataFiltered.length+ " ");

  //Create nested data structure
  // var dataBySubject = 0;
  var dataBySubject = d3.nest()
    .key(function(d) { return d.subject; })
    .entries(dataFiltered)

    console.log("BY SUBJECT: " + dataBySubject.length + " ");

    // CREATE SUBJECTS//---------------------
    var t = d3.transition()
        .duration(750);

    //DATA JOIN
    var subjects = mysvg
      .selectAll("g")
      .data(dataBySubject, function(d) { return d.key; }); //<-- w a key

    // EXIT fade out
    subjects.exit()
      .attr("class", "exit")
      .transition(t-100)
      .style("fill-opacity", 0)
      .remove();

    // UPDATE position
    subjects.attr("class", "update")
      .select("text")
      // .text(function(d){return d.key;})
      .transition(t)
      .attr("x",function(d,i) {return ((i+1)*(vSpace+iHeight))+topMargin-5;})

    // ENTER write new subjects
    subjects.enter().append("g")
      .attr("class", "enter")
      .attr("id",function(d){return "s"+d.key})
      .append("text") //ENTER
      .attr("x",function(d,i) {return ((i+1)*(vSpace+iHeight))+topMargin-5;})
      .attr("y",leftMargin)
      .attr("writing-mode","vertical-rl")
      .text(function(d){return d.key;})
      .style("fill-opacity", 0)
      .transition(t)
      .style("fill-opacity", 1);


    var labels = mysvg
         .selectAll(".label")
         .data(questions);

      labels.enter().append("g")
        .attr("class","label")
        .append("text")
        .attr("y", function(d,i){return (i * (vSpace+iHeight) +5+ topMargin*7); })
        .attr("x", 0 )
        .text(function(d,i){return i+1});


    // CREATE ITEMS//---------------------
    for ( i = 0; i < dataBySubject.length; i++){

      //JOIN
      var items = mysvg
         .selectAll('#s'+dataBySubject[i].key)
         .selectAll(".item")
         .data(dataBySubject[i].values);

      //EXIT fade out
      items.exit()
        .transition(t-100)
        .style("fill-opacity", 0)
        .remove();

      // UPDATE position
      items.transition(t)
        .attr("y", function(d) {return (d.q * (iWidth+hSpace)) + leftMargin*5} )
        .attr("x", (i * (vSpace+iHeight))+6+ topMargin );

      //ENTER write data
      items.enter().append("rect")
         .attr("class",function(d){
           if(d.correct ==1)
            {return "item "+"right";}
           else if (d.orth_correct ==1) {
             {return "item "+"wrong";}
           }
           else if (d.orth_correct ==0 && d.correct ==0) {
             {return "item "+"weird";}
           }})
         .attr("subject",function(d){return dataBySubject[i].key;})
         .attr("q",function(d){return d.q;})
         .attr("session", function(d) { return d.session;})
         .attr("rt", function(d) { return d.rt;})
         .attr("tri", function(d) { return d.correct;})
         .attr("orth", function(d) { return d.orth_correct;})
         .attr("explicit", function(d) { return d.explicit;})
         .attr("impasse", function(d) { return d.impasse;})
         .attr("y", function(d) {return (d.q * (iWidth+hSpace)) + leftMargin*5} )
         .attr("x", (i * (vSpace+iHeight))+6+ topMargin )
         .attr("width",iWidth)
         .attr("height", iHeight)
         .on('mouseup',function(d){
             q= d.q;
             s= d.subject;
             sq = s+"_"+q;
             index = mymappings.map(function(e) { return e.SID_QUESTION; }).indexOf(sq);
             visitor = mymappings[index].VISITORID;
             session = mymappings[index].SESSIONID;
             console.log("visitorID: "+visitor);
             console.log("sessionID: "+session);
             $("#iframe").attr('src',"recording.html?visitor="+visitor+"&session="+session)
             $("#subject").text(sq);
             $('#myModal').modal('show');
             $('#status').text("");

             //ADD SCRIPTS FOR PLAYING THE RECORDING
             document.body.appendChild(document.createElement('script')).src='recordings/'+visitor+'.js';
             document.body.appendChild(document.createElement('script')).src='recordings/session_'+visitor+'.js';
         })
         .style("fill-opacity", 0)
         .transition(t)
         .style("fill-opacity", 1);

      console.log("-----------------------");
    }
    // END CREATE ITEMS--------------------------------------
}

// var visualization = d3.json("/data/final_items.json").then(function(data){
function visualize (error, data, mappings){
    if (error) throw error;
    // console.log(data);
    // console.log(mappings);
    mymappings = mappings; // for interpreter access
    // data = data[0]; //because json request returned object with array as first element
    mydata = data; //just for access in interpreter

    console.log("LOADING DATA: "+data.length+" ");
    render(data); //display the full data set

    //enable buttons once data is loaded
    $(':button').prop("disabled",false);

    //set button listeners with jquery
    $('#imp-none').click(function(){
      inScopeImpasse[0]= !inScopeImpasse[0]
      render(filter(data));});
    $('#impasse').click(function(){
      inScopeImpasse[1]= !inScopeImpasse[1]
      render(filter(data));});
    $('#exp-none').click(function(){
      inScopeExplicit[0]= !inScopeExplicit[0];
      render(filter(data));});
    $('#static').click(function(){
      inScopeExplicit[1]= !inScopeExplicit[1];
      render(filter(data));});
    $('#interactive').click(function(){
      inScopeExplicit[2]= !inScopeExplicit[2];
      render(filter(data));});

// })//end visualization
} //end visualize
