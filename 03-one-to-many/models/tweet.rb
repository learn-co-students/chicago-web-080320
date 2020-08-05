class Tweet
  attr_reader :message, :user, :timestamp

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user  # by saving a user instance here, we say: this tweet belongs to this user

    @timestamp = Time.now

    @@all << self
  end

  def username
    self.user.username
  end

  def self.all
    @@all
  end

end # end of Tweet class
