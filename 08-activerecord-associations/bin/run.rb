require_relative '../config/environment.rb'

puts "Welcome to <App Name Here>! What would you like to do?"

puts "1. View Grocery Stores"
puts "2. View the songs"
puts "3. View a playlist for a grocery store"
puts "4. Add a song to a playlist"
puts "5. Exit"

print "Enter a number: "
user_input = gets.chomp

case user_input
when "1"
  puts "Here are all the grocery stores:"
  # display the name and location of all grocery stores to the user
  GroceryStore.all.each do |gs|
    puts "#{gs.name} - #{gs.location}"
  end
when "2"
  puts "Goodbye"
end
