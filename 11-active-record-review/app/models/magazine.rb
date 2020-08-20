class Magazine < ActiveRecord::Base
  has_many :subscriptions
  has_many :readers, through: :subscriptions

  def email_list
    # using map to get an array of emails for each reader
    email_array = readers.map do |reader|
      reader.email
    end
    
    # join with a ;
    email_array.join(";")

    # can also use active record's pluck method instead of map:
    # readers.pluck(:email).join(";")
  end

  def self.most_popular
    # iterate over all magazines
    Magazine.all.max_by do |mag|
      # get the number of subs for each one
      mag.subscriptions.count
    end
  end
end