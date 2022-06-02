#!/bin/bash
docker stop newsncashfront
docker rmi newsncash/front:latest
git pull origin master
docker build -t newsncash/front .
docker run -p 38380:3000 —name newsncashfront -i -d —rm newsncash/front
#docker logs -f front >> ./container_output_`date "+%Y%m%d"`.log 2>&1 &
#tail -f ./container_output_`date "+%Y%m%d"`.log
