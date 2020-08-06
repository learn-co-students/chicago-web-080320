class AlienSpecies
  attr_reader :race, :homeplanet, :size, :age

  @@all = []

  def initialize(race, homeplanet, size, age)
    @race = race
    @homeplanet = homeplanet
    @size = size
    @age = age

    @@all << self
  end

  # alien_species has many colonies
  def colonies
    # 1. for one specific AlienSpecies, find all the Colonies that belong to that species
    Colony.all.select do |colony_instance|
      # look for the colonies that belong to this alien species
      colony_instance.alien_species == self
    end
  end

  # alien_species has many planets through colonies
  def planets
    # 2. for those Colonies, get the information about the Planets
    self.colonies.map do |colony_instance|
      colony_instance.planet
    end
  end

  def self.all
    @@all
  end

end # end of AlienSpecies class