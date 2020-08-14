class Song < ActiveRecord::Base
  has_many :playlist_items
  has_many :grocery_stores, through: :playlist_items

  def print_song
    puts "#{self.title} - #{self.artist}"
  end

end

# Song -< PlaylistItem >- GroceryStore