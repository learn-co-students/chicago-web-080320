class Colony
  attr_reader :name, :population, :alien_species, :planet

  @@all = []

  def initialize(name, population, alien_species, planet)
    @name = name
    @population = population
    @alien_species = alien_species # belongs to an alien species
    @planet = planet # belongs to a planet

    @@all << self
  end

  def self.all
    @@all
  end

end # end of Colony class