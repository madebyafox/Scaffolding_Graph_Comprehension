>>  PILOT
> Ran 1 PILOT session on Friday Feb 24 @ 12pm with 10 participants
> scaffolds were configured with button default = off, and from looking at the "helpers" log, it seems that few if any students actually
accessed the scaffolds!
> essentially all subjects experienced the control (c = 0) condition
> surprisingly it looks as though nearly all of the students CORRECTLY drew the TM graph in the drawing task, despite not having had access
to a scaffold.  This suggests that they were able to figure out the TM graph without any help.
OOPS! WHAT COULD BE GOING ON?
> these preliminary results also stand in contrast to the observation work, where students for the most part do not seem to grok the TM graph.
> What is different between the experiment & the observation?
> In the observation, students ONLY see the TM graph.  In the experiment, they FIRST see the LM graph.
> This means that they first get familiarity with the questions, but also, (and most likely) the exposure first to the LM graph draws students attention
to the fact that the TM graph must work DIFFERENTLY than the LM graph. In the observation, most students interpret the TM as the LM and draw the LM
ontop of the TM gridlines.  In this sense, the LM task acts as a sort of situational scaffold for the LM.
> To verify this, starting next week I will run the experiment in two modes, one with the LM first (experiment = "experiment") and one with the TM first
(experiment = "reverse").  We expect than in the "reverse" experiment, far fewer students will get the TM questions correct.  They are still asked to draw
the TM graph AFTER the conclusion of the second graphing task, so it is TBD if this will impact the transfer task performance.
> IF these results hold, then I need to consider splitting the study into a between-subjects with no LM task in the beginning to avoid the learning effect
from the LM task.


>> EXPORT CHARLIE session from mLab
mongoexport -h ds161159.mlab.com:61159 -d 2ypdbh -c entries -u expadmin -p secondyear --out 4delta
>> IMPORT CHARLIE session to local db
mongoimport -d LABS -c DELTA --file 4delta.json

>>realized that changed blocked titles in charlie run have ruined my mongo scripts... so I manually changed the charlie.json file back to the original block names
and then reimported

>>TRY importing all .json sessions into a single collection ALL_participants
