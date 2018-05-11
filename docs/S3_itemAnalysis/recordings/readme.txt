MOUSEFLOW DATA WRANGLING

START: a directory of directories containing zip files by question (start at 1)
OR a directory of zip files (start at 2)
MUST HAVE rename.py and rename_session.py in the top directory

      < files start in directories by question >
1. Move files from subdirectory to main directory < files are now in a flat directory >
2. Extract all the zip files in a directory into the main directory and rm zips < top directory contains folders for each zip >
3. In each directory, find the data folder. Run the python renaming script for each js file
4. Search for files of a certain type in subdirectories and move them to a directory
5. Count files in directory




Move files from subdirectory to main directory
 find . -mindepth 2 -type f -print -exec mv {} . \;
(2936 - 2)

Extract all the zip files in a directory into their own directories
for zip in *.zip
 do
   dirname=`echo $zip | sed 's/\.zip$//'`
   if mkdir "$dirname"
   then
     if cd "$dirname"
     then
       unzip ../"$zip"
       cd ..
       rm -f $zip # Uncomment to delete the original zip file
     else
       echo "Could not unpack $zip - cd failed"
     fi
   else
     echo "Could not unpack $zip - mkdir failed"
   fi
 done


Remove subdirectories (and files) 2 layers below and not named data
find . -maxdepth 2 -mindepth 2 \! \( -name data \) -exec rm -rf '{}' \;

Find all js files not named session.js and rename
find . -name "*.js" -and -not -name "session.js"  -exec python rename.py {} \;

Find all .js files named session and run the rename script
find . -name "session.js" -exec python rename_session.py {} \;

Remove all remaining subdirectories
rm -R -- */

Count files in directory
ls | wc -l
