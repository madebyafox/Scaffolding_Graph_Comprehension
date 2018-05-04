import os
import sys
import json


def main():
    # takes the first file after the python program name
    # Ex. python for_amy.py file_name
    input_filename = sys.argv[1]
    # Set the variable so we can use it outside of the "with open"
    visitor_id = None
    with open(input_filename, 'r') as input_file:
        # loop through each line in the file
        for line in input_file:
            # Check if this string is in the line
            if 'visitorId' in line:
                # We take the line, strip the newline character and split on :
                # this returns a list split on :
                components = line.rstrip().split(':')
                # Take the second element
                visitor_id = components[1]
                # remove the last element of the second element (in this case, a
                # comma
                visitor_id = visitor_id[:-1]
                # Replace any backslashes with no space
                visitor_id = visitor_id.replace('\"', '')
                # Replace any whitespace character with no space
                visitor_id = visitor_id.replace(' ', '')
    # add js at the end
    visitor_id = visitor_id+'.js'
    # rename
    os.rename(input_filename, visitor_id)

	# voila!

    
if __name__ == '__main__':
    main()
