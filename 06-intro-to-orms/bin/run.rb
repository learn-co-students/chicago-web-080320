require_relative '../config/environment'

# Game.new(nil, "Age of Empires", 50, "RTS")

Game.new({ "id" => nil, "title" => "Age of Empires", "price" => 50, "genre" => "RTS" })
# let's see what we can do here
binding.pry
"make it work"