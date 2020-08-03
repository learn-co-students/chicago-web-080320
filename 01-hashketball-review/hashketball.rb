require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        {
          name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        {
          name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        {
          name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        {
          name:  "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        {
          name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        {
          name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        {
          name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        {
          name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

# map
# find
# select

def all_players
  # iterate through the hash to find the players
  # all_players_nested = []
  # game_hash.each do |location, team_hash|
  #   all_players_nested << team_hash[:players]
  # end

  # all_players_nested.flatten

  all_players_nested = game_hash.map do |location, team_hash|
    team_hash[:players]
  end

  all_players_nested.flatten
end

def find_player_by_name(player_name)
  # # iterate through all the players
  # found_player = nil
  # all_players.each do |player_hash|
  #   # check a condition that is true when the argument (player_name)
  #   # is equal to the player we're iterating over
  #   if player_hash[:name] == player_name
  #     found_player = player_hash
  #   end
  # end
  # found_player

  all_players.find do |player_hash|
    player_hash[:name] == player_name
  end
end

# num_points_scored knows the number of points scored by each player
def num_points_scored(player_name)
  binding.pry
  found_player = find_player_by_name(player_name)

  # return the points for that player
  found_player[:points]
end

def shoe_size(player_name)
  found_player = find_player_by_name(player_name)

  # return the shoe for that player
  found_player[:shoe]
end

# num_points_scored("Jeff Adrien")