Mod 1 Project Setup
===

## Stage 1: Planning

### Domain Modeling

- What models do I need? 
- What are their attributes? 
- What are the relationships? 
- How do I connect between them?


### Create User Stories

- How should my app work?
- What can users do with my app?
- What user stories are part of MVP?
- What user stories are stretch goals?

### Project Planning Tools

Wireframing:
- https://miro.com/
- https://www.figma.com/

Whiteboarding:
- https://awwapp.com/
- draw.io

Domain Modeling:
- https://dbdiagram.io/home

Project Tracking:
- https://trello.com/
- [GitHub Project Boards](https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards)

## Stage 2: Project Setup/Scaffolding

- Make sure you have an understanding of your [git workflow](https://github.com/ihollander/git-basics-lecture)
- Setup your project with `git`
- Start with models/Active Record: 
  - Make migration
  - Run migration
  - Make class
  - Make seed data
  - Test in console

## Stage 3: CLI setup
- Setup `run.rb` 
- Think about what menus/screens you'll show the user for each user story 
- Stub out user flow (hard code data before worrying about user input)

## Stage 4: Building user stories

For each CRUD action, answer these questions:
- What am I getting/changing in the database? 
  - *insert a new row in the Review table. Review.create*
- What object(s) are involved? 
  - *Game, Review, Player*
- What's some code for this problem that works in the console? 
  - *Review.create(game_id: , player_id: , rating)*
- What steps did I do in the console to get that result?
  - *I found a the id for the player who was logged in, then I found a game_id, then entered a rating* 

## Stage 5: Refactoring

Refactor as you go (don't save it all for the end)!

Think about OO design patterns, even outide your AR classes: would it help to have access to data in multiple methods? How about adding an instance variable?

## Stage 6: Extras

Congrats, you hit your MVP! Now for some fun bonus features. If you're wondering how do I...

- Get better seed data for my application?
  - Use an API ([here are some fun ones](https://apilist.fun/))
  - Use [Faker](https://github.com/faker-ruby/faker)
  - Use a [CSV](https://www.kaggle.com/datasets?fileType=csv) ([how to read a CSV](https://www.rubyguides.com/2018/10/parse-csv-ruby/))

- Add colors / art / animations to my CLI?
  - Use the [colorize](https://github.com/fazibear/colorize) or [paint](https://github.com/janlelis/paint) gem for colors
  - Use the [artii](https://github.com/miketierney/artii)  or tty-font gem for dynamic ASCII art
  - Use [this site](https://www.text-image.com/convert/ascii.html) to turn images into ASCII art, with [this one](https://picasion.com/split-animated-gif) to make animations 
  - Also [this one](http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20) to turn text to ASCII
  - Check out this awesome post by Sylwia (another Flatiron lead): https://medium.com/@sylwiavargas/adding-pictures-to-your-ruby-cli-4252b89823a
  - And this blog by one of my former students Alison: https://blog.prototypr.io/5-ways-to-make-your-cli-app-more-fun-c737207f3b90
  - Also here's a gem Ian made to display images in the terminal: https://github.com/ihollander/cli_pix

- Add an interactive menu/progress bar/table?
  - Check out [all of the tty gems](https://ttytoolkit.org/components/); in particular `tty-prompt`, `tty-table`, `tty-font` and `tty-spinner`

- Get my CLI to play music?
  - play: `process_id = spawn "afplay test.mp3"`
  - stop playing: `Process.kill("SIGKILL", process_id)`
  - [More advanced audio playing example](https://gist.github.com/ihollander/61b194622b7a5389a581ed2a270d0641)
  - Also here's a gem Ian made to make this easier: https://github.com/ihollander/ruby_afplay
