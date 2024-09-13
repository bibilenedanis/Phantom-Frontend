#!/bin/bash

read -p "Are you sure to deploy? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Deployment canceled."
    exit 1
fi

npm run prod

# use rsync to deploy the project to the server
rsync -avzh ./build_production/* root@pw:/var/www/Phantom-Waitress/pb_public \
    --exclude .DS_Store
