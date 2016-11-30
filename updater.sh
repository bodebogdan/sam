#! /bin/sh
bundle exec rake assets:precompile
git add .
git commit -m "heroku update"
git push origin master
