//TODO: scale svg to size of div
//TODO: figure out why active class is reported as opposite

var mysvg = d3.select("svg");

//todo: FIX ERROR WITH DATA SET NOT UPDATING CORRECLTY - POSSIBLY INDEX ISSUE
var topMargin = 10,
    leftMargin = 10,
    iWidth = 10,
    iHeight = 10,
    iSpace = 12;
var inScopeImpasse = [true,true];
var inScopeExplicit = [true,true,true];
var dataFiltered ; //mutable holder for filtered data

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

  //Create nested data structure
  console.log("RENDER DATA: "+ dataFiltered.length+ " records");
  // console.log(dataFiltered);
  // console.log("-------------------");

  var dataBySubject = 0;
  dataBySubject = d3.nest()
    .key(function(d) { return d.subject; })
    .entries(dataFiltered)

    console.log("BY SUBJECT: " + dataBySubject.length + " records");

    // //CREATE SUBJECTS//---------------------
    var t = d3.transition()
        .duration(750);

    //TODO: get g structure to work.

    // //DATA JOIN
    var subjects = mysvg
      .selectAll("g")
      // .selectAll("text")
      .data(dataBySubject, function(d) { return d.key; }); //<-- w a key

    // EXIT old elements not present in new data.
    subjects.exit()
      .attr("class", "exit")
      .transition(t-100)
      .style("fill-opacity", 0)
      .remove();

    // UPDATE old elements present in new data.
    subjects.attr("class", "update")
      .select("text")
      .text(function(d){return d.key;})
      .transition(t)
      .attr("y",function(d,i) {return ((i+1)*iSpace-3)+topMargin;});

    // ENTER new elements present in new data.
    subjects.enter().append("g")
      .attr("class", "enter")
      .attr("id",function(d){return "s"+d.key})
      .append("text") //ENTER
      .attr("y",function(d,i) {return ((i+1)*iSpace-3)+topMargin;})
      .attr("x",leftMargin)
      .style("fill-opacity", 0)
      .text(function(d){return d.key;})
      .transition(t)
      .style("fill-opacity", 1);


    console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
    //
    // CREATE ITEMS//---------------------
    // for ( i = 0; i < dataBySubject.length; i++){
    //
    //   //Update
    //   var items = mysvg
    //      .selectAll('#s'+dataBySubject[i].key)
    //      .selectAll(".item")
    //      .data(dataBySubject[i].values);
    //
    //   //Enter
    //   items.enter().append("rect")
    //      .attr("class",function(d){return "item "+"a"+d.correct;})
    //      .attr("subject",function(d){return dataBySubject[i].key;})
    //      .attr("q",function(d){return d.q;})
    //      .attr("session", function(d) { return d.session;})
    //      .attr("rt", function(d) { return d.rt;})
    //      .attr("tri", function(d) { return d.correct;})
    //      .attr("orth", function(d) { return d.orth_correct;})
    //      .attr("explicit", function(d) { return d.explicit;})
    //      .attr("impasse", function(d) { return d.impasse;})
    //      .attr("x", function(d) {return (d.q * iSpace) + leftMargin*5} )
    //      .attr("y", (i * iSpace)+ topMargin )
    //      .attr("width",iWidth)
    //      .attr("height", iHeight)
    //
    //   //Exit
    //   items.exit().remove();
    // }
    // END CREATE ITEMS--------------------------------------
}

//load data from json file
var visualization = d3.json("/data/final_items.json").then(function(data)
{
    console.log("LOADING DATA: "+data.length+" records");
    // console.log(data);
    // console.log("-------------------");

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

})//end visualization
