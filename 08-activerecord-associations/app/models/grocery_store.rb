class GroceryStore < ActiveRecord::Base
  has_many :playlist_items
  has_many :songs, through: :playlist_items
  
  # def playlist_items
  #   PlaylistItem.all.select do |playlist_instance|
  #     playlist_instance.grocery_store_id == self.id
  #   end
  # end

  # def songs
  #   self.playlist_items.map do |playlist_instance|
  #     playlist_instance.song
  #   end
  # end

end