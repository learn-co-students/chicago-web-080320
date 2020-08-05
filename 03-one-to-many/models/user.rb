require 'pry'

class User
  attr_reader :username
  attr_accessor :bio

  @@all = []

  def initialize(username, bio)
    @username = username
    @bio = bio
    # @tweets = []

    @@all << self
  end
  
  def post_tweet(message)
    Tweet.new(message, self)
  end
  
  # has_many 
  def tweets
    # we have a list of tweets, we want a shorter list of tweets -> select
    Tweet.all.select do |tweet_instance|
      # check if the tweet_instance belongs to the user we called this method on (self)
      tweet_instance.user == self
    end
  end

  def self.all
    @@all
  end
end # end of User class

# - [ ] `User#post_tweet(message)` takes a message an argument, creates a new tweet, and adds it to the user's tweet collection.
# - [ ] `User#tweets` returns an array of Tweet instances.