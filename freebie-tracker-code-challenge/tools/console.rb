# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

c1 = Company.new("Google", 1998)
c2 = Company.new("Facebook", 2004)
c3 = Company.new("Dunder Mifflin", 2002)
c4 = Company.new("Enron", 1995)

d1 = Dev.new("Rick")
d2 = Dev.new("Morty")
d3 = Dev.new("Mr. Meseeks")
d4 = Dev.new("Gazorpazop")

# Freebie#initialize(item_name, company, dev)
f1 = Freebie.new("Keychain", c1, d2)
f2 = Freebie.new("Keychain", c2, d2)
f3 = Freebie.new("Vape Battery", c4, d2)
f4 = Freebie.new("Pencil", c2, d1)
f5 = Freebie.new("Knife", c2, d3)
f6 = Freebie.new("Job Offer", c3, d4)
f7 = Freebie.new("Job Offer", c2, d2)

# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
