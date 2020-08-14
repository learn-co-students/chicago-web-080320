class PlaylistItem < ActiveRecord::Base
  belongs_to :song
  belongs_to :grocery_store

  # def song
  #   Song.find(self.song_id)
  # end

  # def grocery_store
  #   GroceryStore.find(self.grocery_store_id)
  # end
  
end