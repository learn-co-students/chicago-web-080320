require_relative '../config/environment.rb'

puts "Welcome to <App Name Here>! What would you like to do?"

puts "1. View Grocery Stores"
puts "2. Exit"

print "Enter a number: "
user_input = gets.chomp

case user_input
when "1"
  puts "Here are all the grocery stores:"
  binding.pry
when "2"
  puts "Goodbye"
end
