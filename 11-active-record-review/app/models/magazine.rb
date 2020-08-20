class Magazine < ActiveRecord::Base
  has_many :subscriptions
  has_many :readers, through: :subscriptions

  def self.most_popular
    # iterate over all magazines
    Magazine.all.max_by do |mag|
      # get the number of subs for each one
      mag.subscriptions.count
    end
  end
end

# - `Magazine.most_popular`
#   - returns the `Magazine` instance with the most subscribers

# mag1 - 3 subs
# mag2 - 1 sub
# mag3 - 10 subs