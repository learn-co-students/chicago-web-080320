require 'rest-client'
# faraday, httparty, Net::HTTP
require 'json'
require 'pry'

# * Write an application that takes a search term from a user
# * Write an application that takes a search term from a user
# * Make a Request to the GoogleBooks API and get back some results
#   * Docs: https://developers.google.com/books/docs/v1/using#PerformingSearch
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming

puts "Welcome to BookSearchr!"
print "Please enter a search term: "
search = gets.chomp

response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{search}"
books_hash = JSON.parse(response.body)

books_hash["items"].each do |book|
  # * Display the titles, author names joined by an &, and first 100 characters of the description for each book
  authors = book["volumeInfo"]["authors"]
  description = book["volumeInfo"]["description"]

  if authors
    author_text = authors.join(", ")
  else
    author_text = "No authors."
  end

  if description
    description_text = description[0...100]
  else
    description_text = "No description"
  end

  puts "Title: #{book["volumeInfo"]["title"]}"
  puts "Authors: #{author_text}"
  puts "Description: #{description_text}..."
  puts "📚" * 15
end


# binding.pry
# "pls work"