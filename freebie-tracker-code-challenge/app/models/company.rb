class Company
  attr_reader :name, :founding_year

  @@all = []

  def initialize(name, founding_year)
    @name = name
    @founding_year = founding_year

    @@all << self
  end

  def freebies
    # get access to all the freebies
    # from that list, filter out the ones that belong to this company (self)

    # select returns a shorter array, but always has the same data as the original
    Freebie.all.select do |freebie_instance|
      # return true if the freebie's company matches self
      freebie_instance.company == self
    end
  end

  def devs
    binding.pry
    # go through the freebies that belong to this company
    freebie_array = self.freebies.map do |freebie_instance|
      # get back a list of devs for those freebies
      freebie_instance.dev
    end

    # call the method .dev on each element inside the array
    # self.freebies.map(&:dev)

    freebie_array.uniq
  end
  # c1.devs

  def give_freebie(dev, item_name)
    Freebie.new(item_name, self, dev)
  end
  # c1.give_freebie(d2, "water bottle")

  def self.all
    @@all
  end

  def self.most_distributed
    # most_distributed_company = nil
    # most_freebies = 0

    # Company.all.each do |company_instance|
    #   if company_instance.freebies.count > most_freebies
    #     most_freebies = company_instance.freebies.count
    #     most_distributed_company = company_instance
    #   end
    # end

    # most_distributed_company

    Company.all.max_by do |company_instance|
      company_instance.freebies.count
    end

    # number of freebies (per company)
    # company_instance.freebies.count
  end

end

# - `Company.most_distributed`
#   - should return an instance of `Company` which has the most freebies given out to devs
