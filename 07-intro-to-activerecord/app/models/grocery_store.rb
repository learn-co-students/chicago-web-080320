class GroceryStore < ActiveRecord::Base
  
  # CRUD
  # Create
  # GroceryStore.new(:hash) - create an instance in Ruby
  # GroceryStore#save - save the Ruby obj in database if no ID exists (INSERT)
  # GroceryStore.create(:hash) - new + save

  # Read
  # GroceryStore.all - returns all rows from the DB
  # GroceryStore.last - returns the last instance
  # GroceryStore.first - returns the first instance
  # GroceryStore.find(id) - returns the first row that matches the id
  # GroceryStore.find_by(hash) - return the first instance that matches
  # GroceryStore.where(hash / string of SQL) - return all instances that match

  # Update
  # GroceryStore#save - save the Ruby obj in database if an ID exists (UPDATE)
  # GroceryStore#update(hash) - update the instance in the DB
  # GroceryStore.update(hash) - as a class method, updates all instances in the DB

  # Delete
  # GroceryStore#destroy - delete one instance from the database
  # GroceryStore.destroy_all - delete all the rows from the database

end