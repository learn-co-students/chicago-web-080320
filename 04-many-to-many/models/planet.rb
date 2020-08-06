class Planet
  attr_reader :name, :weather, :terrain

  @@all = []

  def initialize(name, weather, terrain)
    @name = name
    @weather = weather
    @terrain = terrain

    @@all << self
  end

  # planet has many colonies
  def colonies
    # 1. for one specific Planet, find all the Colonies that belong to that planet
    Colony.all.select do |colony_instance|
      # look for the colonies that belong to this alien species
      colony_instance.planet == self
    end
  end

  # planet has many species through colonies
  def alien_species
    # 2. for those Colonies, get the information about the species
    self.colonies.map do |colony_instance|
      colony_instance.alien_species
    end
  end

  def self.all
    @@all
  end

end # end of Planet class