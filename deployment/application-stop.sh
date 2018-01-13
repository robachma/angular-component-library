#!/bin/bash
sudo su
service httpd stop
cd /home/ec2-user/github
npm build
rm -rf /var/www/html/*
mv dist/* /var/www/html
