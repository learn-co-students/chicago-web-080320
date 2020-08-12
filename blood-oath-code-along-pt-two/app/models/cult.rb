class Cult
  attr_reader :name, :location, :founding_year, :slogan

  @@all = []

  def initialize(name, location, founding_year, slogan)
    @name = name
    @location = location
    @founding_year = founding_year
    @slogan = slogan

    @@all << self
  end


  def recruit_follower(follower)
    BloodOath.new(follower, self, "2015-06-21")
  end

  #Helper method to return array of cult followers
  def my_followers
    cult_blood_oaths = BloodOath.all.select {|b_o_instance| b_o_instance.cult == self}
    cult_followers = cult_blood_oaths.map {|b_o_instance| b_o_instance.follower}
    cult_followers.uniq
  end

  #returns an Integer that is the number of followers in this cult
  def cult_population
    my_followers.count
  end

  #returns a Float that is the average age of this cult's followers
  def average_age
    #Add up ages of all followers
    total_age = my_followers.sum do |follower_instance|
      follower_instance.age
    end

    #Divide total age / num of followers
    total_age / cult_population.to_f
  end

  #prints out all of the mottos for this cult's followers
  def my_followers_mottos
    my_followers.each {|follower_instance| puts follower_instance.life_motto }
  end


  def self.all
    @@all
  end

  #takes a String argument that is a name and returns a Cult instance whose name matches that argument
  def self.find_by_name(cult_name)
    self.all.find {|cult_instance| cult_instance.name == cult_name}
  end

  #takes a String argument that is a location and returns an Array of cults that are in that location
  def self.find_by_location(location)
    self.all.select {|cult_instance| cult_instance.location == location}
  end

  #takes an Integer argument that is a year and returns all of the cults founded in that year
  def self.find_by_founding_year(founding_year)
    self.all.select { |cult_instance| cult_instance.founding_year == founding_year}
  end


end
