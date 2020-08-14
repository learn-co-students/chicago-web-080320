puts "💣 Deleting old data"
GroceryStore.destroy_all
Song.destroy_all

puts "🛒 Seeding Grocery Stores..."
GroceryStore.create(
  name: "Trader Joe's",
  size_in_sq_ft: rand(1..100) * 500,
  location: "Chicago",
  twenty_four_hours: true
)

GroceryStore.create(
  name: "Jewel",
  size_in_sq_ft: rand(1..100) * 500,
  location: "Chicago",
  twenty_four_hours: false
)

GroceryStore.create(
  name: "Tony's",
  size_in_sq_ft: rand(1..100) * 500,
  location: "Chicago",
  twenty_four_hours: false
)

GroceryStore.create(
  name: "Key Foods",
  size_in_sq_ft: rand(1..100) * 500,
  location: "Brooklyn",
  twenty_four_hours: false
)

GroceryStore.create(
  name: "C-Town",
  size_in_sq_ft: rand(1..100) * 500,
  location: "Brooklyn",
  twenty_four_hours: false
)


# TODO: add Faker
puts "🎤 Seeding Songs..."
50.times do 
  Song.create(
    title: Faker::Music::Prince.song,
    artist: Faker::Kpop.girl_groups,
    genre: Faker::Music.genre,
  )
end

puts "🤠 Done!"