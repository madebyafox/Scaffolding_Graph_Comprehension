

//first flatten and create the [session]_blocks collection
//then create _test_blocks for item analysis
//then create _all_participants


//CREATE A FLAT COLLECTION OF ALL BLOCKS --> for future queries
db.MIKENOV.aggregate(
 [ 
    {$unwind: "$data"},
    {$replaceRoot: { newRoot: "$data" }},
    {$out: "_mikenov_blocks"}
]);  
// // 
// //CREATE A FLAT COLLECTION OF ALL QUESTION BLOCKS --> for item analysis SPSS
db.MIKENOV.aggregate(
 [ 
    {$unwind: "$data"},
    {$match: { "data.block": {$in: ["linear_scaffolded","linear_testing","triangular_scaffolded","triangular_testing","drawingTest","instructions_drawing"] }}},
    {$replaceRoot: { newRoot: "$data" }},
    {$project: 
       { "url":0,
         "trial_type":0,
          "internal_node_id":0,
          "clicked":0,
          "helps":0
     }},
    {$out: "_mikenov_test_blocks"}
]);  
    
    
//CREATE A SUMMARIZED COLLECTION OF ALL PARTICIPANTS --> for main analysis SPSS
db.getCollection('_mikenov_blocks').aggregate([
    {$match: {"block": {$in: ["linear_scaffolded","linear_testing","triangular_scaffolded","triangular_testing","drawingTest","instructions_drawing","demo-1","demo-2","debrief"]} }},
    {$project: {
       subject:1, 
       block:1,
       experiment:1,
       condition:1,
       session:1,
       time_elapsed :1,
       lm_scenario: { $cond: { if: {$eq: ['$block', 'linear_scaffolded']} , then: "$scenario", else: null } },
       tm_scenario: { $cond: { if: {$eq: ['$block', 'triangular_scaffolded']} , then: "$scenario", else: null } },
       ls_n: { $cond: { if: {$eq: ['$block', 'linear_scaffolded']} , then: "$correct", else: null } },
       ls_t: { $cond: { if: {$eq: ['$block', 'linear_scaffolded']} , then: "$rt", else: null } },
       lt_n: { $cond: { if: {$eq: ['$block', 'linear_testing']} , then: "$correct", else: null } },
       lt_t: { $cond: { if: {$eq: ['$block', 'linear_testing']} , then: "$rt", else: null } },
       ts_n: { $cond: { if: {$eq: ['$block', 'triangular_scaffolded']} , then: "$correct", else: null } },
       ts_t: { $cond: { if: {$eq: ['$block', 'triangular_scaffolded']} , then: "$rt", else: null } },
       tt_t: { $cond: { if: {$eq: ['$block', 'triangular_testing']} , then: "$rt", else: null } },
       tt_n: { $cond: { if: {$eq: ['$block', 'triangular_testing']} , then: "$correct", else: null } },
       d_n:  { $cond: { if: {$eq: ['$block', 'drawingTest']} , then: "$correct", else: null } },
       d_t:  { $cond: { if: {$eq: ['$block', 'drawingTest']} , then: "$rt", else: null } },
       draw_t: { $cond: { if: {$eq: ['$block', 'instructions_drawing']} , then: "$rt", else: null } },
       demos: "$responses"
      }
    }
    ,
    {$group: {
       _id:"$subject",
       experiment: {$first:"$experiment"},
       session: {$first:"$session"},
       condition: {$first:"$condition"},
       demos: {$addToSet: "$demos"},
       lm_scenarios: {$max:"$lm_scenario"},
       tm_scenarios: {$max:"$tm_scenario"},
       ls_n: {$sum: "$ls_n"},
       lt_n: {$sum: "$lt_n"},
       ts_n: {$sum: "$ts_n"},
       tt_n: {$sum: "$tt_n"},
       d_n:  {$sum: "$d_n"},
       ls_t: {$sum: "$ls_t"},
       lt_t: {$sum: "$lt_t"},
       ts_t: {$sum: "$ts_t"},
       tt_t: {$sum: "$tt_t"},
       d_t: {$sum: "$d_t"},
       totalTime: {$max:"$time_elapsed"}
      }},
    {$project: {
      _id:"$subject",
      subject:"$_id",
      experiment: 1,
      session: 1,
      condition: 1,
      lm_scenarios: 1,
      tm_scenarios : 1,  
      ls_n: 1,
      lt_n: 1,
      ts_n: 1,
      tt_n: 1,
      d_n: 1,
      ls_t: 1,
      lt_t: 1,
      ts_t: 1,
      tt_t: 1,
      d_t: 1,  
      linear_score: {$add: ["$ls_n","$lt_n"]},
      triangular_score: {$add: ["$ts_n","$tt_n"]},
      linear_time: {$add: ["$ls_t","$lt_t"]},
      triangular_time: {$add: ["$ts_t","$tt_t"]},
      score_diff: {$subtract: [{$add: ["$ts_n","$tt_n"]},{$add: ["$ls_n","$lt_n"]}]},
      time_diff: {$subtract: [{$add: ["$ls_t","$lt_t"]},{$add: ["$ts_t","$tt_t"]}]},
      totalScore:{ $sum: { $add: ["$ls_n","$lt_n","$ts_n","$tt_n","$d_n"]}},       
      totalTime: 1,
      demo1: {"$arrayElemAt": ["$demos",0]},
      demo2: {"$arrayElemAt": ["$demos",1]}
     }},
    {$out: "_mikenov_participants"}
]);


