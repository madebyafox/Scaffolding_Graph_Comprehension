bar <- ggplot(l_scores, aes(x = condition, y= value, fill=variable))
bar + stat_summary(aes(y = value, group=variable), fun.y=mean,  geom="bar", position="dodge") +
  stat_summary(fun.data = mean_cl_normal, geom="errorbar", position = position_dodge(width=0.9),width=0.2) +
  # stat_summary(aes(label= format(..y.., digits=2)), fun.y=mean, geom="text", size=4, vjust=-3,position = position_dodge(width=0.9))+
  labs (x = "Scaffold", y= "Score (# correct)", fill ="Graph") +
  coord_cartesian(ylim=c(0,15)) +
  theme_bw() +
  theme(strip.background = element_blank()) +
  theme(axis.text=element_text(size=14),
        axis.title=element_text(size=16,face="bold")) + 
  theme(legend.text=element_text(size=14),
        legend.title=element_text(size=16,face="bold"))+
  theme(plot.title =element_text(size=16,face="bold") )+
#  theme(text = element_text(size=15))+
  ggtitle("Mean Score by Graph Task and Scaffold") +
  scale_x_discrete(labels=c("none", "what-text", "how-text" , "static image", "interactive image")) +
  scale_fill_manual( values = c(green,red),
                     breaks = c("triangular_score", "linear_score"),
                     labels = c("Triangular","Linear"))


TMMODEL <- aov (value ~ condition, data=t_scores)
#summary(TMMODEL)
summary.lm(TMMODEL)
#plot(TMMODEL)
#boxplot(value ~ condition, data=t_scores, col=rainbow(5))
tuk<- TukeyHSD(TMMODEL)
tuk

boxplot(value/15*100 ~ condition, data=t_scores)

bar <- ggplot(l_scores, aes(x = order, y= value, fill=variable))
bar + stat_summary(aes(y = value, group=variable), fun.y=mean,  geom="bar", position="dodge") +
  stat_summary(fun.data = mean_cl_normal, geom="errorbar", position = position_dodge(width=0.9),width=0.2) +
  labs (x = "Graph Order", y= "Score (# correct)", fill="Graph") +
  coord_cartesian(ylim=c(0,15)) +
  scale_x_discrete(labels=c("LMFirst" = "LM-First", "TMFirst" = "TM-First")) +
  theme_bw() +
  theme(axis.text=element_text(size=14),
        axis.title=element_text(size=16,face="bold")) + 
  theme(legend.text=element_text(size=14),
        legend.title=element_text(size=16,face="bold"))+
  theme(plot.title =element_text(size=16,face="bold") )+
  theme(strip.background = element_blank()) +
  ggtitle("Mean Score by Graph Order and Task")+
  scale_fill_manual(values = c(green,red),
                    name = "Graph",
                    breaks =c("linear_score", "triangular_score"),
                    labels =c("Linear","Triangular"))



g <- ggplot(df_subjects, aes(`Graph Type`))
g + geom_bar() + 
  ggtitle("Frequency of Graph Types in Drawing Task") + 
  labs(x="Type of Graph Drawn", y="Number of Participants") + 
  coord_cartesian(ylim=c(0,300)) +
  stat_count(aes(label=..count..), geom="text", position="identity", size=5, vjust = -1)+
  theme_bw() +
  theme(axis.text=element_text(size=14),
        axis.title=element_text(size=16,face="bold")) + 
  theme(legend.text=element_text(size=14),
        legend.title=element_text(size=16,face="bold"))+
  theme(plot.title =element_text(size=16,face="bold") )+
  theme(strip.background = element_blank()) +
  theme(panel.border = element_blank())




MP_scores <- ggplot(l_scores, aes(x = order, y=value, color=variable)) 

MP_scores + 
  stat_summary(aes(y = value,group=variable), fun.y=mean,  geom="line") +
  coord_cartesian(ylim=c(0,15)) +
  scale_y_continuous(minor_breaks = seq(0 , 30))+
  stat_summary(fun.y = mean, geom = "point") +  #the point
  stat_summary(fun.data = mean_cl_boot, geom = "errorbar", width = .1) +
  theme(plot.title = element_text(family = "Helvetica", color="#666666", face="bold", size=12, hjust=0.5)) + 
  theme(axis.title = element_text(family = "Helvetica", color="#666666", face="bold", size=10)) +
  labs(x="Graph Order ", y="Mean Score") +
  ggtitle("Mean Score by Graph and Order") +
  theme_bw() +theme(axis.text=element_text(size=14),
                    axis.title=element_text(size=16,face="bold")) + 
  theme(legend.text=element_text(size=14),
        legend.title=element_text(size=16,face="bold"))+
  theme(plot.title =element_text(size=16,face="bold") )+
  theme(strip.background = element_blank()) +
  scale_x_discrete(labels=c("TMFirst" = "TM First", "LMFirst" = "LM First"))+
  scale_color_manual(values = c(green,red),
                     name="Graph",
                     breaks=c("triangular", "linear"),
                     labels=c("triangular","linear"))



MP_scores <- ggplot(l_scores, aes(x = variable, y=value, color=scenario)) 

MP_scores + 
  stat_summary(aes(y = value,group=scenario), fun.y=mean,  geom="line") +
  coord_cartesian(ylim=c(0,15)) +
  scale_y_continuous(minor_breaks = seq(0 , 30))+
  stat_summary(fun.y = mean, geom = "point") +  #the point
  stat_summary(fun.data = mean_cl_boot, geom = "errorbar", width = .1) +
  theme(plot.title = element_text(family = "Helvetica", color="#666666", face="bold", size=12, hjust=0.5)) + 
  theme(axis.title = element_text(family = "Helvetica", color="#666666", face="bold", size=10)) +
  labs(x="Graph ", y="Mean Score (# correct)") +
  ggtitle("Mean Score by Scenario Order and Graph Type") +
  theme_bw() +
  theme_bw() +theme(axis.text=element_text(size=14),
                    axis.title=element_text(size=16,face="bold")) + 
  theme(legend.text=element_text(size=14),
        legend.title=element_text(size=16,face="bold"))+
  theme(plot.title =element_text(size=16,face="bold") )+
  theme(strip.background = element_blank()) +
  scale_x_discrete(labels=c("triangular_score" = "triangular", "linear_score" = "linear"))+
  scale_color_manual(values = c(purple,blue),
                     name="Scenario",
                     breaks=c("axis", "longmire"),
                     labels=c("tasks","rooms"))


MP_scores + 
  stat_summary(aes(y = value,group=scenario), fun.y=mean,  geom="line") +
  coord_cartesian(ylim=c(0,15)) +
  scale_y_continuous(minor_breaks = seq(0 , 30))+
  stat_summary(fun.y = mean, geom = "point") +  #the point
  stat_summary(fun.data = mean_cl_boot, geom = "errorbar", width = .1) +
  theme(plot.title = element_text(family = "Helvetica", color="#666666", face="bold", size=12, hjust=0.5)) + 
  theme(axis.title = element_text(family = "Helvetica", color="#666666", face="bold", size=10)) +
  labs(x="Graph ", y="Mean Score (# correct)") +
  ggtitle("Mean Score by Scenario Order and Graph Type") +
  theme_bw() +
  theme_bw() +theme(axis.text=element_text(size=14),
                    axis.title=element_text(size=16,face="bold")) + 
  theme(legend.text=element_text(size=14),
        legend.title=element_text(size=16,face="bold"))+
  theme(plot.title =element_text(size=16,face="bold") )+
  theme(strip.background = element_blank()) +
  scale_x_discrete(labels=c("triangular_score" = "triangular", "linear_score" = "linear"))+
  scale_color_manual(values = c(purple,blue),
                     name="Scenario",
                     breaks=c("axis", "longmire"),
                     labels=c("tasks","rooms"))


Smodel <- aov (value ~ scenario, data=t_scores)
#summary(TMMODEL)
summary.lm(Smodel)
#plot(TMMODEL)
#boxplot(value ~ condition, data=t_scores, col=rainbow(5))
#tuk<- TukeyHSD(Smodel)
#tuk

bar <- ggplot(l_scores, aes(x = variable, y= value, fill=scenario))
bar + stat_summary(aes(y = value, group=scenario), fun.y=mean,  geom="bar", position="dodge") +
  stat_summary(fun.data = mean_cl_normal, geom="errorbar", position = position_dodge(width=0.9),width=0.2) +
  stat_summary(aes(label= format(..y.., digits=2)), fun.y=mean, geom="text", size=6, vjust=-3,  position = position_dodge(width=0.9),width=0.2)+
  labs (x = "Graph ", y= "Score (# correct)", fill="Scenario") +
  coord_cartesian(ylim=c(0,15)) +
  scale_x_discrete(labels=c("LMFirst" = "LM-First", "TMFirst" = "TM-First")) +
  theme_bw() +
  theme(axis.text=element_text(size=14),
        axis.title=element_text(size=16,face="bold")) + 
  theme(legend.text=element_text(size=14),
        legend.title=element_text(size=16,face="bold"))+
  theme(plot.title =element_text(size=16,face="bold") )+
  theme(strip.background = element_blank()) +
  ggtitle("Mean Score by Scenario and Graph")+
  scale_fill_manual(values = c(purple,blue),
                    name = "Graph",
                    breaks =c("axis", "longmire"),
                    labels =c("tasks","events"))

