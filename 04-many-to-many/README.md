Many to Many Relationship
===

## SWBATs
- Implement both sides of a many to many relationships
- Practice keeping groups of data related to classes on the class as a class variable
- Demonstrate Single Source of Truth by not storing collections of objects on other objects
- Demonstrate Single Source of Truth by not storing one object in multiple collections


## Objectives
- Review Relationships (one to many => has many, belongs to)
- Expand on relationships to express many to many
  - We'll build out a new relationship from scratch to teach this concept

## Examples

Tweet >- User


Movie -< Screening >- Theater

Doctor -< Appointent >- Patient

Singer -< SongSinger >- Song

Movie -< Character >- Actor
1. for one specific movie, find all the characters
2. for those characters, get the information about the actors

Driver -< Ride >- Passenger
1. for one specific driver, find all the rides
2. for those rides, get the information about the passengers

AlienSpecies -< Colony >- Planets
1. for one specific AlienSpecies, find all the Colonies that belong to that species
2. for those Colonies, get the information about the Planets


## Notes

"Is this a good name for a model?" Make sure it:
- is a noun (it should represent one specific "thing" or "object")
- has attributes: what are the attributes that make up that object?
- has a singluar name (not plural; not a )

"How can I figure out the relationship between two models?" Ask yourself:
- For every one (X), how many (Y)?
    - For every one Tweet, there is only one User
- For every one (Y), how many (X)?
    - For every one User, there are many Tweets