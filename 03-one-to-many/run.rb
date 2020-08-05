require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

coffee_dad = User.new("coffee_dad", "just a dad who love coffee")
tea_mom = User.new("tea_mom", "Tea > Coffee")

tweet1 = Tweet.new("coffee coffee coffee", coffee_dad)
tweet4 = Tweet.new("T T T ", tea_mom)

tweet2 = Tweet.new("its java time#", coffee_dad)
tweet3 = Tweet.new("just drank tea, 0 stars", coffee_dad)

coffee_dad.post_tweet("hooray for coffee!")
coffee_dad.post_tweet("hooray for coffee!!!")

tweet5 = Tweet.new("tea 4 me!", tea_mom)

binding.pry
"hi"