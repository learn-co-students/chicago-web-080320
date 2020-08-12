Intro to SQL
===

## SWBATs

* [ ] Explain persistence and the need for using SQL
* [ ] Define SQL
* [ ] Explain the difference between SQLite3 and SQL
* [ ] Explore provided data through SQLite Browser
* [ ] Define CRUD
* [ ] Perform CRUD actions on a single table
* [ ] Perform CRUD actions across related tables

## Outline
* 15 mins: discussion of databases and SQL
* 30 mins: look at a SQL database and write some SQL

## Key Questions
* What can I do with data?
* Why is persistence important? How have we been persisting data so far?
* What is a (relational) database?
* What kinds of databases are there?
* What is SQL?
* What is CRUD?
* How does an app like Instagram use CRUD?

* How would these domain models translate to SQL tables?


Tweet >- User


Game -< Review >- Player



## Definitions
- **Primary Key**: a *unique* key that identifies one row in a database table.
- **Foreign Key**: a key that is used to link between two tables. Required for setting up a one-to-many relationship. The *foreign key* from one table always refers to a *primary key* from another table.

In the example here:
![twitter](twitter_tables.png)

We have two tables, a *users* table and a *tweets* table. Both the users table and the tweets table have their own *primary key* called *id*. There is also a *foreign key* called *user_id* on the tweets table that refers to the *id* column on the *users* table. That way, we can easily join between them and see which tweets belong to which user.


## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `game-reviews.db` file from this repo. 
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the games table

2. Write the SQL to select the game with the title "Super Mario Bros."

  2a. Change the query to include all games with the word 'Mario' in their title

3. Write the SQL to display an game's titles next to their review ratings

  3a. Write the SQL to show the game title, the review rating, and the player's name

4. Write the SQL to create a review
