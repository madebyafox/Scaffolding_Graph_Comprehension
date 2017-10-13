* Encoding: UTF-8.

/*SPLIT file by experiment version (graph order)*/
SORT CASES  BY experiment. 
SPLIT FILE LAYERED BY experiment.

/* COMPUTE minute and second variables for times*/
COMPUTE m_totalTime = totalTime * 0.001.
COMPUTE m_totalTime = m_TotalTime / 60.

/* EXPLORE distribution of total Experiment RUNTIME*/
/*LOOK FOR: Mean, median, max and min*/
DESCRIPTIVES VARIABLES=m_totalTime 
  /STATISTICS=MEAN STDDEV RANGE MIN MAX KURTOSIS SKEWNESS.

/* EVALUATE Normatlity of RUNTIME*/
/*Look for non-significant wilkes & shapiro tests + trending Q-Q plots*/
EXAMINE VARIABLES=m_totalTime 
  /PLOT NPPLOT 
  /MISSING LISTWISE 
  /NOTOTAL.

* Chart Builder. 
GGRAPH 
  /GRAPHDATASET NAME="graphdataset" VARIABLES=m_totalTime MISSING=LISTWISE REPORTMISSING=NO 
  /GRAPHSPEC SOURCE=INLINE. 
BEGIN GPL 
  SOURCE: s=userSource(id("graphdataset")) 
  DATA: m_totalTime=col(source(s), name("m_totalTime")) 
  GUIDE: axis(dim(1), label("m_totalTime")) 
  GUIDE: axis(dim(2), label("Frequency")) 
  ELEMENT: interval(position(summary.count(bin.rect(m_totalTime))), shape.interior(shape.square)) 
  ELEMENT: line(position(density.normal(m_totalTime)), color("Normal")) 
END GPL.

/* EXPLORE distribution of total Experiment SCORE*/
/*LOOK FOR: Mean, median, max and min*/
DESCRIPTIVES VARIABLES=totalScore 
  /STATISTICS=MEAN STDDEV RANGE MIN MAX KURTOSIS SKEWNESS.

/* EVALUATE Normatlity of TOTAL SCORE*/
/*Look for non-significant wilkes & shapiro tests + trending Q-Q plots*/
EXAMINE VARIABLES=totalScore
  /PLOT NPPLOT 
  /MISSING LISTWISE 
  /NOTOTAL.

* Chart Builder. 
GGRAPH 
  /GRAPHDATASET NAME="graphdataset" VARIABLES=totalScore MISSING=LISTWISE REPORTMISSING=NO 
  /GRAPHSPEC SOURCE=INLINE. 
BEGIN GPL 
  SOURCE: s=userSource(id("graphdataset")) 
  DATA: m_totalTime=col(source(s), name("totalScore")) 
  GUIDE: axis(dim(1), label("totalScore")) 
  GUIDE: axis(dim(2), label("Frequency")) 
  ELEMENT: interval(position(summary.count(bin.rect(m_totalTime))), shape.interior(shape.square)) 
  ELEMENT: line(position(density.normal(m_totalTime)), color("Normal")) 
END GPL.

/*LOOK FOR SUSPICIOUS SCAFFOLDING PHASE SCORES*/
/*IF the scores in the scaffolding phase are very low, then either the student was not trying OR the scaffold*/
/*was not functioning properly*/
DESCRIPTIVES VARIABLES=ls_n ts_n 
  /STATISTICS=MEAN STDDEV RANGE MIN MAX KURTOSIS SKEWNESS.

FREQUENCIES VARIABLES=ls_n ts_n 
  /ORDER=ANALYSIS.


