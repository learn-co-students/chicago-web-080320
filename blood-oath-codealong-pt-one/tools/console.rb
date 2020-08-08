require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console


#CULT INSTANCES
jonestown = Cult.new("Jonestown", "Guyana", 1972, "Drink the Flavor-Aid")
heavens_gate = Cult.new("Heaven's Gate", "Oregon", 1995, "Haley Bopp is Coming")
scientology = Cult.new("Scientology", "Cali", 1955, "L. Ron Hubbard Lives")
maga = Cult.new("MAGA", "MAGA Country", 1959, "Many of People Are Saying It's Going to Be Great")

#FOLLOWER INSTANCES
nick = Follower.new("Nick", 33, "Buy Bitcoin")
jeff = Follower.new("Jeff", 35, "No MAGA for Me")
ignas = Follower.new("Ignas", 24, "It's Amazing")
nicks_dad = Follower.new("Tom", 64, "Bring Back Our Jobs")

#BLOOD OATH INSTANCES
bo_one = BloodOath.new(nick, jonestown, "2020-01-15")
bo_two = BloodOath.new(nick, heavens_gate, "2020-02-15")
bo_three = BloodOath.new(jeff, scientology, "2020-07-15")
bo_four = BloodOath.new(ignas, scientology, "2000-02-15")
bo_five = BloodOath.new(nicks_dad, maga, "2016-02-15")
bo_six = BloodOath.new(nick, scientology, "2020-08-04")




binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits
