require 'pry'

spicy_foods = [
  { name: 'Buffalo Wings', cuisine: 'American', heat_level: 3 },
  { name: 'Mapo Tofu', cuisine: 'Sichuan', heat_level: 6 },
  { name: 'Green Curry', cuisine: 'Thai', heat_level: 9 },
]

# All groups:
# Solve the problem below using the enumerable method you are given.
# Then, come up with another example using that enumerable method. 
# For your example, you can use the same sample data or create new data to work with.

# Group 1: .each
# Output to the terminal each spicy food in the following format: 
# `Buffalo Wings (American) | Heat Level: 🌶🌶🌶`
# (Hint: if you're wondering how to repeat a string a certain number of times, try multiplying it by a number. Ruby's chill like that.)
def print_spicy_foods(spicy_foods)

end

# Group 2: .map
# Return an array of strings with JUST the names of each spicy food.
def get_names(spicy_foods)

end

# Group 3: .filter
# Return an array of hashes of spicy foods with a heat level greater than 5.
def spiciest_foods(spicy_foods)

end

# Group 4: .find
# Given an array of spicy foods and a string representing a cuisine,
# return a single hash for the spicy food whose cuisine matches 
# the cuisine being passed to the method.
def get_spicy_food_by_cuisine(spicy_foods, cuisine)

end

# Use this to test your methods
# run "ruby run.rb" and try calling the methods from the console
binding.pry
"pls"