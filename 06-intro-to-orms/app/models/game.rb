class Game
  attr_accessor :id, :title, :genre, :price

  def initialize(args_hash)
    args_hash.each do |key, value|
      self.send("#{key}=", value)
    end
    # @id = args_hash["id"]
    # @title = args_hash["title"]
    # @genre = args_hash["genre"]
    # @price = args_hash["price"]

    # TODO: replace with database!
    # @@all << self
  end

  def save
    sql = "INSERT INTO games (title, genre, price) VALUES (?, ?, ?)"
    DB[:conn].execute(sql, self.title, self.genre, self.price)
  end

  def self.all
    sql = "SELECT * FROM games"
    games_array = DB[:conn].execute(sql)

    games_array.map do |game_hash|
      Game.new(game_hash)
      # Game.new(game_hash["id"], game_hash["title"], game_hash["genre"], game_hash["price"])
    end
  end

end