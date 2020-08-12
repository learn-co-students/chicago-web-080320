class Follower
  attr_reader :name, :age, :life_motto

  @@all = []

  def initialize(name, age, life_motto)
    @name = name
    @age = age
    @life_motto = life_motto

    @@all << self
  end

  #returns an Array of this follower's cults
  def cults
    follower_bos = BloodOath.all.select {|b_o_instance| b_o_instance.follower == self}
    follower_cults = follower_bos.map {|b_o_instance| b_o_instance.cult}
    follower_cults.uniq
  end

  #takes in an argument of a Cult instance and adds this follower to the cult's list of followers
  def join_cult(cult_instance)
    BloodOath.new(self, cult_instance, "1999-02-05")
  end


  def self.all
    @@all
  end

  #takes an Integer argument that is an age and returns an Array of followers who are the given age or older
  def self.of_a_certain_age(age)
    self.all.select {|follower_instance| follower_instance.age >= age}
  end

end
