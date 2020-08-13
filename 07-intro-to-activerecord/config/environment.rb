require 'bundler/setup'
# requires all our gems in the Gemfile into our project
Bundler.require

# by convention, database.yml will configure database connection
# you might also see this in some projects (it will essentially to the same thing)
# ActiveRecord::Base.establish_connection(
#   adapter: 'sqlite3',
#   database: "db/development.sqlite"
# )

# enables logging in console whenever ActiveRecord writes SQL for us
ActiveRecord::Base.logger = Logger.new(STDOUT)

require_all 'app'
