# space_explorers
Michael Wideburg, Nicholas McDonnell, Travis Holter, Ross Miglin (in first name alphabetical order)

# Overview
Space evaders is a click based RPG space adventure game. The story begins with you signing up and creating a character from 2-3 classes of robot. 
From there you are prompted to navigate the universe of space explorers, being challenged every step of the way!

Players navigate a chosen world and story- fighting enemies, completing tasks, and developing their characters abilities and arsenal.

## Progression Design
When at the splash page, prompted to log in and pick one out of three characters and then enter into the game.
Game web page will display story information and current location. 
Player clicks on a map and clicks on pop up decisions and options. 
Player can also buy items and level their character through in game display. 


Inspiration games: FTL (Faster Than Light), Oregon Trail



# Functionality & MVP

User authorization: sign up and log in
Character and weapon classes for user choice
Saving of user progress data to database
Visualization of user progress via google Maps and map travel functionality
Interactive web page containing decisions, character information, and inventory
Production README

## Bonus
Implementing Ethereum Wallet API with ℞osscoin
Realtime Communication between characters with websockets
Tutorial

# Technologies & Challenges

Diagram below of overall architecture:

-- Input architecture diagram --


## Google Maps 
  Using Google Maps image type setting up explorable maps that trigger stat based conditionals.
  Set radius and bounds for Google Maps, giving player illusion for player expansion of explorable areas. Google landmarks will allow for player interactables and     progress benchmarks. 
  Player UI will allow for interaction with the map display.


## AWS	
 Store character information and progression 
  
#### Backend: Node, Express, MongoDB
MongoDB will be used as a database to store user information for user auth and for characters details for users robots. The database will be set up as an API to return json objects that contain this information. Express will be used to handle the ajax requests and Node will be used run javascript on the page. 

Framework: 
Turn based game: Give specified values to attack and defense objects. 

  Ex: - Missiles > Shields (Ross Coin to purchase)
    
 3 customizable stats
 
 Hull: Durability
 Reactor: Speed
 Weapon Ability: Number of offensive options

#### Frontend: React and Redux
  Using react and Redux we will store the result of battle actions in local state and only update the database with the results. The user will be able to click on options, locations and menus and have responses without the page refreshing with a HTTP request.  
  
# Group Members and Work Breakdown




### Monday:
  Michael Wideberg:
Group leading 
Auth
Rich

  Ross Miglin:
AWS

  Nicholas McDonnell:
Character/weapon stats

  Travis Holter:
Character/weapon classes 

### Tuesday:
 Michael Wideberg: 
Google maps api, bounds and marker

 Ross Miglin: 
Frontend components 

 Nicholas McDonnell:
Backend game logic/schema 

 Travis Holter:
Saving of user progress


### Wednesday

 Michael Wideberg:
Splash page animation, fight page and css

 Ross Miglin:
Front end decision tree

 Nicholas McDonnell:
Decision poly tree

 Travis Holter:
Decision poly tree

Thursday:

 Michael Wideberg:
UI interface, maybe frontend conditionals

 Ross Miglin:
Front end ui, maybe frontend conditionals

 Nicholas McDonnell:
Backend finish

 Travis Holter:
Backend finish

Friday:

 Michael Wideberg: Multiplayer
 Ross Miglin: Ross Coin with websockets

 Nicholas McDonnell: Multiplayer and Tutor
 
 Travis Holter: Tutorial



  




