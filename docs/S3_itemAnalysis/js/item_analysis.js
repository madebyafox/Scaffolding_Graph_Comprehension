//TODO: scale svg to size of div
//TODO: figure out why active class is reported as opposite
//TODO: change modal size
var mymappings ;
var topMargin = 20,
    leftMargin = 10,
    iWidth = 10,
    iHeight = 10,
    vSpace = 5;
    hSpace = 5;
var questions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

class Status {
  constructor(panel) {
      // this.name = name;
      // this.specie = specie;
      this.panel = panel;
      this.imp_none = true;
      this.imp_impasse = true;
      this.exp_none = true;
      this.exp_static = true;
      this.exp_ixn = true;
      this.data = null;
      this.mappings = null;
  }
  sing() {
      return `${this.name} can sing`;
  }
  dance() {
      return `${this.name} can dance`;
  }
}



function drawPanel(panel){
  console.log("loading panel: "+panel);
  
  //LOAD DATA 
  var data = d3.json("data/final_items.json");
  var mappings = d3.csv("data/recordings_mapping.csv");
  Promise.all([data, mappings, panel]).then(visualize);
  }//end drawPanel
  
function filter(data,panel){
  console.log("GET BUTTON STATES panel: "+panel);
  

  let impasseCriteria = [window['value'+panel].imp_none,window['value'+panel].imp_impasse] ;
  let explicitCriteria = [window['value'+panel].exp_none,window['value'+panel].exp_static, window['value'+panel].exp_ixn] ;
  
 
  // //TRANSFORM t/f button toggle value array to array of indices that have true values
  // impasseCriteria = inScopeImpasse.reduce(function(a, e, i) {
    impasseCriteria = impasseCriteria.reduce(function(a, e, i) {
    if (e === true)
        a.push(i+1); //add 1 b/c condition values start at 1 not 0
    return a;
    }, []);

  //TRANSFORM t/f button toggle value array to array of indices that have true values
  // explicitCriteria = inScopeExplicit.reduce(function(a, e, i) {
    explicitCriteria = explicitCriteria.reduce(function(a, e, i) {
    if (e === true)
        a.push(i+1); //add 1 b/c condition values start at 1 not 0
    return a;
    }, []);
  console.log("transformed ",impasseCriteria,explicitCriteria);
  //FILTER data based on the true array values
  return ([data.filter(function (d) {
    if (
        (d.impasse == impasseCriteria[0]  || d.impasse == impasseCriteria[1])
        &
        (d.explicit == explicitCriteria[0] || d.explicit == explicitCriteria[1] || d.explicit == explicitCriteria[2])
      )
      {return d;}
    }),panel]);
    // console.log(impasseCriteria);
    // console.log(explicitCriteria);
}//end filter

function render(values){
  let dataFiltered = values[0];
  let panel = values[1];
  console.log("PANEL "+panel);
  console.log("RENDER DATA: "+ dataFiltered.length+ " ");

  //Create nested data structure
  // var dataBySubject = 0;
  var dataBySubject = d3.nest()
    .key(function(d) { return d.subject; })
    .entries(dataFiltered);

    console.log("BY SUBJECT: N= " + dataBySubject.length + " ");

    // CREATE SUBJECTS//---------------------
    var t = d3.transition()
        .duration(750);

    var mysvg = d3.select("#svg-"+panel);  
    console.log("#svg-"+panel);
    
    //DATA JOIN
    var subjects = mysvg
      .selectAll("g")
      // .data(d3.group(dataFiltered, d => d.height))
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
      // .attr("x",function(d,i) {return ((i+1)*(vSpace+iHeight))+topMargin-5;})
      .attr("y",function(d,i) {return ((i+1)*(vSpace+iHeight))+topMargin;})

    // ENTER write new subjects
    subjects.enter().append("g")
      .attr("class", "enter")
      .attr("id",function(d){return "s"+d.key})
      .append("text") //ENTER
      // .attr("x",function(d,i) {return ((i+1)*(vSpace+iHeight))+topMargin-5;})
      // .attr("y",leftMargin)
      .attr("y",function(d,i) {return ((i+1)*(vSpace+iHeight))+topMargin;})
      .attr("x",leftMargin)
      // .attr("writing-mode","vertical-rl")
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
        .attr("x", function(d,i) {return (i * (iWidth+hSpace)) + leftMargin+55} )
        // .attr("x", function(d,i){return (i * (vSpace+iHeight)+60); })
        .attr("y", 15 )
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
        // .attr("y", function(d) {return (d.q * (iWidth+hSpace)) + leftMargin*5} )
        // .attr("x", (i * (vSpace+iHeight))+6+ topMargin );
        .attr("x", function(d) {return (d.q * (iWidth+hSpace)) + leftMargin*5} )
        .attr("y", (i * (vSpace+iHeight))+6+ topMargin );

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
        //  .attr("y", function(d) {return (d.q * (iWidth+hSpace)) + leftMargin*5} )
        //  .attr("x", (i * (vSpace+iHeight))+6+ topMargin )
        .attr("x", function(d) {return (d.q * (iWidth+hSpace)) + leftMargin*5} )
         .attr("y", (i * (vSpace+iHeight))+6+ topMargin )
         .attr("width",iWidth)
         .attr("height", iHeight)
         .on('mouseup',function(i,d){
            console.log(i);
            q= d.q;
             s= d.subject;
             sq = s+"_"+q; 
             let mymappings = window['value'+panel].mappings;
            //  console.log(mymappings);
             index = mymappings.map(function(e, error) { 
              return e.SID_QUESTION; }).indexOf(sq);
             console.log(mymappings);
             if (index == -1){alert("Sorry, no recording for this subject!");}
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
  function visualize (values){
    //get values from input parameter
    let panel = values[2];
    let data = values[0];
    let mappings = values[1];
    console.log(panel);
    console.log(data);
    console.log(mappings);

    //dynamically creae status object based on panel
    // eval('panel' + panel + '= new Status('+ panel+');'); //alternate approach
    // console.log(panel1);
    window['value'+panel] = new Status(panel); //save in window[] for ease of use 
    console.log(window['value'+panel]);
    
    //set data and mappings 
    window['value'+panel].mappings = mappings; //save in window[] for ease of use 
    // mymappings = mappings; // for interpreter access
    // data = data[0]; //because json request returned object with array as first element
    // mydata = data; //just for access in interpreter

    console.log("LOADING DATA: "+data.length+" ");
    render([data,panel]); //display the full data set

    //enable buttons once data is loaded
    $(':button').prop("disabled",false);

    //set button listeners with jquery
    $('#imp-none-'+panel).click(function(){
      window['value'+panel].imp_none = !window['value'+panel].imp_none;
      render(filter(data,panel));});
    $('#impasse-'+panel).click(function(){
      window['value'+panel].imp_impasse = !window['value'+panel].imp_impasse;
      render(filter(data,panel));});
    $('#exp-none-'+panel).click(function(){
      window['value'+panel].exp_none = !window['value'+panel].exp_none;
      render(filter(data,panel));});
    $('#static-'+panel).click(function(){
      window['value'+panel].exp_static = !window['value'+panel].exp_static;
      render(filter(data,panel));});
    $('#interactive-'+panel).click(function(){
      window['value'+panel].exp_ixn = !window['value'+panel].exp_ixn;
      render(filter(data,panel));});

// })//end visualization
} //end visualize
