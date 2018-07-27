SESSION=$1

mongoexport -h ds259325.mlab.com:59325 -d 2ypdb-s3-beh -c entries -u expadmin -p thirdyear --out $1.json
mongoimport -d SGC3 -c $1 --file $1.json
