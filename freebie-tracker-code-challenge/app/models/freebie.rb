class Freebie
  attr_reader :item_name, :dev, :company

  @@all = []

  def initialize(item_name, company_instance, dev_instance)
    @item_name = item_name
    @company = company_instance
    @dev = dev_instance

    @@all << self
  end

  def self.all
    @@all
  end

end

