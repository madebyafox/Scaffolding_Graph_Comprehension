//CREATE PARTICIPANT FILE
var pilot_participants = db.pilot.aggregate(
 [ 
    {$unwind: "$data"},
    {$match: {"data.block": {$in: ["demo-1","demo-2","linear_scaffolded","linear_testing","triangular_scaffolded","triangular_tested","drawingTest"]} }},
    {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.time_elapsed":1,"data.correct":1} },
    {$replaceRoot: { newRoot: "$data" }},
    {$group: {
         _id:"$subject",
         totalTime: {$max:"$time_elapsed"},
         correct: {$sum: "$correct"},
         demos: {$addToSet: "$responses"}
     }},
    {$project: {_id:1, "totalTime":1, "correct":1, 
        "demo1": {"$arrayElemAt": ["$demos",0]},
        "demo2": {"$arrayElemAt": ["$demos",1]},
        "session":"pilot",
        "experiment":"experiment",
        "subject":"$_id"
    }},
//     {$out: "_participants"}
]);  
    
//SUMMARIZE LINEAR SCAFFOLD SCORES    
var linearlearn= db.pilot.aggregate([
    {$unwind: "$data"},
    {$match: {"data.block": "linear_scaffolded" }},
    {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
    {$replaceRoot: { newRoot: "$data" }},
    {$group: {
         _id:"$subject",
         LS_t: {$sum:"$rt"},
         LS_n: {$sum: "$correct"}     
    }},
    {$out: "_linearlearn"}
]);    




   
//SUMMARIZE LINEAR TESTING SCORES    
var lineartest = db.pilot.aggregate([
    {$unwind: "$data"},
    {$match: {"data.block": "linear_testing" }},
    {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
    {$replaceRoot: { newRoot: "$data" }},
    {$group: {
         _id:"$subject",
         LT_t: {$sum:"$rt"},
         LT_n: {$sum: "$correct"}     
    }},
    {$out: "_lineartest"}
]);   
    
//SUMMARIZE TRIANGULAR LEARNING SCORES    
var triangularlearn = db.pilot.aggregate([
    {$unwind: "$data"},
    {$match: {"data.block": "triangular_scaffolded" }},
    {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
    {$replaceRoot: { newRoot: "$data" }},
    {$group: {
         _id:"$subject",
         TS_t: {$sum:"$rt"},
         TS_n: {$sum: "$correct"}     
    }},
    {$out: "_triangularlearn"}
]);   
    
//SUMMARIZE TRIANGULAR TESTING SCORES    
var triangulartest = db.pilot.aggregate([
    {$unwind: "$data"},
    {$match: {"data.block": "triangular_testing" }},
    {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
    {$replaceRoot: { newRoot: "$data" }},
    {$group: {
         _id:"$subject",
         TT_t: {$sum:"$rt"},
         TT_n: {$sum: "$correct"}     
    }},
    {$out: "_triangulartest"}

]);  

//SUMMARIZE DRAWING SCORES    
var drawing = db.pilot.aggregate([
    {$unwind: "$data"},
    {$match: {"data.block": "drawingTest" }},
    {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
    {$replaceRoot: { newRoot: "$data" }},
    {$group: {
         _id:"$subject",
         D_t: {$sum:"$rt"},
         D_n: {$sum: "$correct"}     
    }},
    {$out: "_drawing"}

]);     
   
//MAP REDUCE 
    
        
