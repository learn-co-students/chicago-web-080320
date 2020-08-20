class Reader < ActiveRecord::Base
  has_many :subscriptions
  has_many :magazines, through: :subscriptions

  def subscribe(magazine, price)
    Subscription.create(magazine_id: magazine.id, reader_id: self.id, price: price)
  end
end


# - `Reader#subscribe(magazine, price)`
#   creates a new `subscription` in the database associated with the magazine and the reader