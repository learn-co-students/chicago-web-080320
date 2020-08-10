class Dev
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def freebies
    Freebie.all.select do |freebie_instance|
      # return true if the freebie's dev matches self
      freebie_instance.dev == self
    end
  end

  def companies
    # go through the freebies that belong to this company
    freebie_array = self.freebies.map do |freebie_instance|
      # get back a list of companies for those freebies
      freebie_instance.company
    end
    freebie_array.uniq
  end


  def self.all
    @@all
  end

end

