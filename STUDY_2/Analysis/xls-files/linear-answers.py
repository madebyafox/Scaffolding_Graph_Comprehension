
print("hello world")

import csv

ifile = open('test.csv', 'r')
reader = csv.reader(ifile)

ofile = open('out.csv','wt')
writer = csv.writer(ofile)

writer.writerow( ('dbid',
'block',
'answer',
'correct',
'scaffold',
'question',
'scenario',
'graph',
'condition',
'session',
'experiment',
'subject',
'time_elapsed',
'trial_index',
'rt',
'rt_sec',
'q_order',
'lm_correct'
) )
rownum = 0
for row in reader:
# Save header row.
    lm_correct = ''
    dbid = row[0]
    block = row[1]
    answer = row[2]
    correct = row[3]
    scaffold = row[4]
    question = row[5]
    scenario = row[6]
    graph =  row[7]
    condition = row[8]
    session = row[9]
    experiment = row[10]
    subject = row[11]
    time_elapsed = row[12]
    trial_index = row[13]
    rt = row[14]
    rt_sec = row[15]
    q_order = row[16]

    if scenario == 'axis' and graph == 'triangular':
        if question == 'start' :
            if answer == 'G':
                lm_correct = 1
            else: lm_correct = 0
        elif question == 'end' :
            if answer == '7':
                lm_correct = 1
            else: lm_correct = 0
        elif question == 'duration' :
            if answer == 'ACEFGHIKL':
                lm_correct = 1
            else: lm_correct = 0
        elif question == 'midpoint' :
            if answer == '11':
                lm_correct = 1
            else: lm_correct = 0
        elif question == 'start+overlap' :
            if answer in ['10','11','']:
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'overlap+overlap' :
            if answer == 'O':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'start+duration' :
            if answer == '10':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'finishes' :
            if answer == 'F':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'before+overlap' :
            if answer == 'FM':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'contain+duration' :
            if answer == 'DN':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'during' :
            if answer == 'NO':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'meets' :
            if answer == 'M':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'starts' :
            if answer == '4':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'starts+finishes' :
            if not answer :
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'during+overlap' :
            if answer == 'AL':
                lm_correct = 1
            else:  lm_correct = 0

    elif scenario == 'longmire' and graph == 'triangular':
        if question == 'start' :
            if not answer :
                lm_correct = 1
            else: lm_correct = 0
        elif question == 'end' :
            if answer == 'CEGHIJKLMNO':
                lm_correct = 1
            else: lm_correct = 0
        elif question == 'duration' :
            if answer == 'GO':
                lm_correct = 1
            else: lm_correct = 0
        elif question == 'midpoint' :
            if answer == '4':
                lm_correct = 1
            else: lm_correct = 0
        elif question == 'start+overlap' :
            if answer == 'A':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'overlap+overlap' :
            if answer == 'A':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'start+duration' :
            if answer == 'AD':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'finishes' :
            if answer == '7':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'before+overlap' :
            if answer == 'ABDF':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'contain+duration' :
            if answer == 'GO':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'during' :
            if answer == 'GHJKLMNO':
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'meets' :
            if not answer :
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'starts' :
            if answer in ['1','10','101','']:
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'starts+finishes' :
            if not answer :
                lm_correct = 1
            else:  lm_correct = 0
        elif question == 'during+overlap' :
            if not answer :
                lm_correct = 1
            else:  lm_correct = 0

    print (lm_correct)

    writer.writerow( (
    dbid,
    block,
    answer,
    correct,
    scaffold,
    question,
    scenario,
    graph,
    condition,
    session,
    experiment,
    subject,
    time_elapsed,
    trial_index,
    rt,
    rt_sec,
    q_order,
    lm_correct
    ) )

ifile.close()
ofile.close()
