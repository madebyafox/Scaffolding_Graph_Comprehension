## packages I want loaded for all pages of my site
suppressPackageStartupMessages({
  library(tidyverse)
  library(stringr)
  library(readr) #load csv
  library(pastecs) #stat.desc
  library(tables) # pretty tables
  library(dplyr) #data formatting
  library(ez) #mixed anova
  library(reshape2) #reformatting data
  library(car)   #statistics
  library(ggplot2) #graphs!
  library(psych) #describeby
  library(gridExtra) #arranging plots
})

## variables I need for my site 
#data <- readr::read_csv('important_data.csv')


## knitr options I want set as default for all ('global') code chunks
knitr::opts_chunk$set(echo = FALSE, message = FALSE, warning = FALSE)

