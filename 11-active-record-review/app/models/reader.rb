class Reader < ActiveRecord::Base
  has_many :subscriptions
  has_many :magazines, through: :subscriptions

  def subscribe(magazine, price)
    Subscription.create(magazine_id: magazine.id, reader_id: self.id, price: price)
  end

  def total_subcription_price
    # using each
    total = 0
    self.subscriptions.each do |sub|
      total += sub.price
    end
    total

    # you can also do this with Active Record built-in methods
    # self.subscriptions.sum(:price)
  end

  def cancel_subscription(magazine)
    # find the subscription associated with this reader (self) and the magazine
    subscription = Subscription.find_by(reader_id: self.id, magazine_id: magazine.id)
    # delete the subscription from the database
    subscription.destroy
  end
end