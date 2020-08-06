require 'pry'
require_relative 'models/alien_species.rb'
require_relative 'models/planet.rb'
require_relative 'models/colony.rb'

a1 = AlienSpecies.new("humans","earth", 8000000000, 150000)
a2 = AlienSpecies.new("Klingons", "Klingon",	123000, 1)
a3 = AlienSpecies.new("Xenomorphs", "LV 426", 1000, 123)

p1 = Planet.new("earth",	"all kinds", "all kinds")
p2 = Planet.new("mars",	"dry",	"desert")
p3 = Planet.new("jupiter",	"stormy",	"gas")
p4 = Planet.new("tattoine",	"dry",	"desert")
p5 = Planet.new("Decapod 10",	"salty",	"sand")

# (name, population, alien_species, planet)
chicago = "chicago"
c1 = Colony.new(chicago, 3_500_000, a3, p1)

c2 = Colony.new("new york", 8_000_000, a1, p2)
c3 = Colony.new("mos eisley", 1000, a1, p4)


binding.pry
"pls work"