Intro to Active Record
===

## SWBATs
- [ ] Describe how gems work and the value of shared code
- [ ] Implement Active Record in their projects
- [ ] Practice creating migrations for updating the database structure
- [ ] Explain how `rake` works and how to run rake tasks
- [ ] Distinguish between and define "model", "class", and "table"
- [ ] Practice with Active Record::Base instance and class methods
- [ ] Perform persistent CRUD actions on one model using Active Record
- [ ] Understand how Active Record follows Convention over Configuration

### Outline
* Demonstrate Mass Assignment
* Review project setup
* Show how to use `rake` tasks
* Choose a domain and set up Active Record on our models (Game >-< Player)?
    * Set up our database with *migrations*
    * Write CRUD on a model using Active Record
* Discuss *convention over configuration*, aka Active Record magic
* If there's time...
    * Talk about more features of migrations (`rollback`, `add_column`) and practice reading documentation


### Active Record

* What are the steps for setting up Active Record on a model?

* How can we do CRUD actions using Active Record?

### Rake

Rake lets us save some set instructions we want the computer to run into a command that we can call in the terminal using `rake` ie: `rake db:create_migration NAME="create_tweets"`

If we want to check what tasks we have available to us, we can do `rake --tasks` or `rake -T`

### Migrations
Migrations are Active Record keeps track of database changes over time. Migrations serve a few important purposes. They:

- Simplify the process of setting up a database by letting us write Ruby instead of SQL
- Ensure Active Record is always aware of the *structure* of our database: the tables and columns that make up our database
- Keep track of changes to our database over time (like version control/git for our database)
- Let us share Ruby code for setting up a database, instead of sharing database files directly

We specify how we want the database to change in the migration file: [docs](https://guides.rubyonrails.org/active_record_migrations.html)

* We can create migrations using `rake db:create_migration NAME="the_name_we_want`
* We can check what migrations have been run so far using `rake db:migrate:status`
* We tell Active Record to apply what we wrote in the migration files to the database using `rake db:migrate`

### Convention over Configuration
Active Record relies heavily on naming conventions to do its metaprogramming (aka *magic*), and following those naming conventions is important if you want Active Record to work as intended.

For Active Record to connect between a model and a table, the model name should be *singular* and the table name should be *plural*. Active Record comes with `.singularize` and `.pluralize` methods that you can call on strings to check what how to follow naming convention:

```rb
  "tweet".pluralize
  # => "tweets"

  "tweets".singularize
  # => "tweet"

  "person".pluralize
  # => people

  "human".pluralize
  # => humen (????)
```

### Important Methods from Active Record

#### Create
* `Model.new(attribute: value)` - takes a hash as an argument and creates a new instance in local memory without saving to the database
* `Model#save` - if the instance *doesn't* have an id, `save` will insert it into the database
* `Model.create(attribute: value)` - Combines the functionality of `Model.new` and `Model#save`. Creates a new Ruby instance and saves it to the database.

#### Read
* `Model.all` - returns an ActiveRecord Collection of all instances
* `Model.first` - returns the first instance from the db
* `Model.last` - returns the last instance from the db
* `Model.find(id)` - find one instance by id (Ruby array equivalent: `.find`)
* `Model.find_by(attribute: value)` - takes a hash or a string of SQL, and finds the first one instance that matches (Ruby array equivalent: `.find`)
* `Model.where(attribute: value)` - takes a hash or a string of SQL, and finds a collection of all instances that match (Ruby array equivalent: `.select`)
* `Model.all.pluck(:column1, :column2)` - select specific columns from a collection (Ruby array equivalent: `.map`)

#### Update
* `Model#update(attribute: value)` - takes a hash and updates an instance in db
* `Model#save` - if the instance *does* have an id, `save` will insert it into the database

#### Delete
* `Model#destroy` - delete a row in the database
* `Model.destroy_all` - delete all rows in a table

### Resources
[Active Record Basics](https://guides.rubyonrails.org/active_record_basics.html)
[Active Record Migrations](https://guides.rubyonrails.org/active_record_migrations.html)
[Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html)