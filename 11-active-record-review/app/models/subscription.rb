class Subscription < ActiveRecord::Base
  belongs_to :reader
  belongs_to :magazine

  def print_details
    # self in the instance method is the instance of the subscription
    puts "#{self.reader.name} subscribed to #{self.magazine.title} for $#{self.price}"
  end
  
end


# - `Subscription#print_details`
#   - `puts` a string to the terminal to display the details of the subscription
#   - the string should be formatted like this: `{reader name} subscribed to {magazine title} for ${subscription price}`