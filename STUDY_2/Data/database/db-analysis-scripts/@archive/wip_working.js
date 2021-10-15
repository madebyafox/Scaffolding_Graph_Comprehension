



//-----------EXTRACT DATA FOR PILOT ANALYSIS -------------------//
// db.pilot.find(
//  {},
//  {
//      _id:1,
//      "data.subject":1,
//      "data.experiment":1,
//      "data.condition":1,
//      "data.session":1
//   }
// )

//FLATTEN DATA STRUCTURE FOR PILOT ---------------------------


//FLATTEN DATA STRUCTURE FOR PILOT ---------------------------
/db.linear_norming.find(); //24 records
//unwind should result in 24 X 20 blocks (each norming trial included 20 blocks)

//construct norming participant file
    
//need: subject, demo-1 responses, demo-2 responses, time_elapsed from demo-2, sum of correct from linear_testing, sum of correct from linear_scaffolded
// var norming_participants = db.linear_norming.aggregate(
//   [ 
//     {$unwind: "$data"},
//     {$match: {"data.block": {$in: ["demo-1","demo-2","linear_scaffolded","linear_testing"]} }},
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
//         }}
// ]);
       
              
// var cursor = db.pilot.aggregate(
//  [
//     { $project: {
//         _id:1,
//         data: {
//                 subject:1,
//                 experiment:1,
//                 condition:1,
//                 session:1,
//                 trial_index:1,
//                 block:1,
//                 scenario:1,
//                 graph:1,
//                 question:1,
//                 correct:1,
//                 rt:1,
//                 time_elapsed:1,
//                 answer:1,
//                 responses:1
//             },
//             
//         }
//     },
//     {$unwind: { 
//                 path:"$data", 
//                 preserveNullAndEmptyArrays: true
//               }
//      },
// //     {$unwind: '$data.responses'},
//     {$match: {'data.block': { $nin: ["instructions_lab","codes","scenario-one","scenario-two"] }}},    
//     {$replaceRoot: { newRoot: "$data" }}
//     
// 
//  ]
// );
// while (cursor.hasNext()) 
//  {
//    print(cursor.next());
//  };
// 

// norming_participants   //save this to file      
// var cursor = db.linear_norming.aggregate(
//  [
//     { $project: {
//         _id:1,
//         data: {
//                 subject:1,
//                 experiment:1,
//                 condition:1,
//                 session:1,
//                 trial_index:1,
//                 block:1,
//                 scenario:1,
//                 graph:1,
//                 question:1,
//                 correct:1,
//                 rt:1,
//                 time_elapsed:1,
//                 answer:1,
//                 responses:1
//             }
//         }
//     },    
//     {$unwind: { 
//                 path:"$data", 
//                 preserveNullAndEmptyArrays: true
//               }
//      },    
//     {$replaceRoot: { newRoot: "$data" }},
//  ]
// );
// while (cursor.hasNext()) 
//  {
//    print(cursor.next());
//  };
// //--------------------------- ---------------------------
// 
// 
// 
// 
// 
// 
// // 
// // // db.getCollection('pilot').find({"data.condition":0})
// // // db.getCollection('pilot').find({"data.condition":"1"},{"data.rt":1, "data.trial_index":1})
// // 
// // // db.getCollection('pilot').aggregate([
// // //     {$replaceRoot: { newRoot: "$data[0]" }}
// // // ])
// // 
// // 
// //  
// // // db.pilot.find( { } ,  
// // //   { 
// // //     "data.experiment":1,
// // //     "data.session":1,
// // //     "data.subject":1,
// // //     "data.condition":1, 
// // //     "data.trial_index":1,
// // //     "data.block":1,
// // //     "data.rt":1,
// // //     "data.correct":1,
// // //     "data.graph":1,
// // //     "data.scenario":1,
// // //     "data.question":1
// // //    } 
// // // )
// // // 
// // 
// // // db.pilot.aggregate(
// // // //     {$unwind:"$data"},
// // // //     {$replaceRoot: {newRoot: "$data"}}
// // // //     {$match: {"data.trial_index":1}}
// // // )    
// // 
// // 
// // 
// // //-------------HANDLING ALFA SESSION ----------------
// // //FIND THE ALFA DOCS NOT IN REVERSE OR EXPERIMENT
// // // db.getCollection('ALFA').find(
// // //     { $and: 
// // //         [
// // //             { "data.experiment": { $ne: "reverse"}},
// // //             { "data.experiment": { $ne: "experiment"}}
// // //         ]
// // //     }
// // // )
// // 
// // //DELETE ALFA DOCS NOT IN REVERSE OR EXPERIMENT
// // // db.getCollection('ALFA').deleteMany(
// // //        { $and: 
// // //         [
// // //             { "data.experiment": { $ne: "reverse"}},
// // //             { "data.experiment": { $ne: "experiment"}}
// // //         ]
// // //     }
// // // )
// // 
// // // db.getCollection('ALFA').find(); //should have 20 results
// // 
// // // //FIND DOCS WITH INCORRECT SESSION NAME
// // // db.getCollection('ALFA').find(
// // //     { "data.session": {$ne: "alfa"}}
// // // )
// //     
// // //OOPS! This replaced the content of the data object with a single variable "alfa    
// // // db.runCommand(
// // //    {
// // //      findAndModify: "ALFA",
// // //      query:  { "data.session": {$ne: "alfa"}},
// // //      sort: { rating: 1 },
// // //      update: { "data": {"session": "alfa"}},
// // //    }
// //  )    