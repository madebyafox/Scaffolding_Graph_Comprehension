SESSION=$1

mongoexport -h ds259325.mlab.com:59325 -d 2ypdb-s3-beh -c entries -u expadmin -p thirdyear --out $1.json
