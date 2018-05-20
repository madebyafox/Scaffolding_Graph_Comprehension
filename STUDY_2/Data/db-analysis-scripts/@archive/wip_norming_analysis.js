// //db.linear_norming.find(); //24 records
// //unwind should result in 24 X 20 blocks (each norming trial included 20 blocks)
// 
// //construct norming participant file
//     
// //need: subject, demo-1 responses, demo-2 responses, time_elapsed from demo-2, sum of correct from linear_testing, sum of correct from linear_scaffolded
// // var norming_participants = db.linear_norming.aggregate(
// //   [ 
// //     {$unwind: "$data"},
// //     {$match: {"data.block": {$in: ["demo-1","demo-2","linear_scaffolded","linear_testing"]} }},
// //     {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.time_elapsed":1,"data.correct":1} },
// //     {$replaceRoot: { newRoot: "$data" }},
// //     {$group: {
// //          _id:"$subject",
// //          totalTime: {$max:"$time_elapsed"},
// //          correct: {$sum: "$correct"},
// //          demos: {$addToSet: "$responses"}
// //      }},
// //     {$project: {_id:1, "totalTime":1, "correct":1, 
// //         "demo1": {"$arrayElemAt": ["$demos",0]},
// //         "demo2": {"$arrayElemAt": ["$demos",1]},
// //         }}
// // ]);
//         
// // norming_participants   //save this to file      
// 
// 
// //CREATE PILOT PARTICIPANT FILE
// var pilot_participants = db.pilot.aggregate(
//  [ 
//     {$unwind: "$data"},
//     {$match: {"data.block": {$in: ["demo-1","demo-2","linear_scaffolded","linear_testing","triangular_scaffolded","triangular_tested","drawingTest"]} }},
//     {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.time_elapsed":1,"data.correct":1} },
//     {$replaceRoot: { newRoot: "$data" }},
//     {$group: {
//          _id:"$subject",
//          totalTime: {$max:"$time_elapsed"},
//          correct: {$sum: "$correct"},
//          demos: {$addToSet: "$responses"}
//      }},
//     {$project: {_id:1, "totalTime":1, "correct":1, 
//         "demo1": {"$arrayElemAt": ["$demos",0]},
//         "demo2": {"$arrayElemAt": ["$demos",1]},
//         "session":"pilot",
//         "experiment":"experiment",
//         "subject":"$_id"
//     }},
//     {$out: "_participants"}
// ]);  
//     
// //SUMMARIZE LINEAR SCAFFOLD SCORES    
// var linearlearn= db.pilot.aggregate([
//     {$unwind: "$data"},
//     {$match: {"data.block": "linear_scaffolded" }},
//     {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
//     {$replaceRoot: { newRoot: "$data" }},
//     {$group: {
//          _id:"$subject",
//          LS_t: {$sum:"$rt"},
//          LS_n: {$sum: "$correct"}     
//     }},
//     {$out: "_linearlearn"}
// ]);    
// 
//    
// var lineartest = db.pilot.aggregate([
//     {$unwind: "$data"},
//     {$match: {"data.block": "linear_testing" }},
//     {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
//     {$replaceRoot: { newRoot: "$data" }},
//     {$group: {
//          _id:"$subject",
//          totalTime: {$sum:"$rt"},
//          correct: {$sum: "$correct"}     
//     }},
//     {$out: "_lineartest"}
// ]);   
//     
// var triangularlearn = db.pilot.aggregate([
//     {$unwind: "$data"},
//     {$match: {"data.block": "triangular_scaffolded" }},
//     {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
//     {$replaceRoot: { newRoot: "$data" }},
//     {$group: {
//          _id:"$subject",
//          totalTime: {$sum:"$rt"},
//          correct: {$sum: "$correct"}     
//     }},
//     {$out: "_triangularlearn"}
// ]);   
//     
// var triangulartest = db.pilot.aggregate([
//     {$unwind: "$data"},
//     {$match: {"data.block": "triangular_testing" }},
//     {$project: {"data.block":1, "data.subject":1, "data.responses":1, "data.rt":1,"data.correct":1}},
//     {$replaceRoot: { newRoot: "$data" }},
//     {$group: {
//          _id:"$subject",
//          totalTime: {$sum:"$rt"},
//          correct: {$sum: "$correct"}     
//     }},
//     {$out: "_triangulartest"}
// 
// ]);          
//    
//         
//         
// // var cursor = db.pilot.aggregate(
// //  [
// //     { $project: {
// //         _id:1,
// //         data: {
// //                 subject:1,
// //                 experiment:1,
// //                 condition:1,
// //                 session:1,
// //                 trial_index:1,
// //                 block:1,
// //                 scenario:1,
// //                 graph:1,
// //                 question:1,
// //                 correct:1,
// //                 rt:1,
// //                 time_elapsed:1,
// //                 answer:1,
// //                 responses:1
// //             },
// //             
// //         }
// //     },
// //     {$unwind: { 
// //                 path:"$data", 
// //                 preserveNullAndEmptyArrays: true
// //               }
// //      },
// // //     {$unwind: '$data.responses'},
// //     {$match: {'data.block': { $nin: ["instructions_lab","codes","scenario-one","scenario-two"] }}},    
// //     {$replaceRoot: { newRoot: "$data" }}
// //     
// // 
// //  ]
// // );
// // while (cursor.hasNext()) 
// //  {
// //    print(cursor.next());
// //  };
// // 