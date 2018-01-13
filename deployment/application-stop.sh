#!/bin/bash
sudo su
service httpd stop
cd /tmp/github
npm build
rm -rf /var/www/html/*
mv dist/* /var/www/html
