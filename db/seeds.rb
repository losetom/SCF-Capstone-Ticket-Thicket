# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'time'

puts "Planting Seeds..."

faker_kpop = [Faker::Kpop.i_groups,

    Faker::Kpop.ii_groups,
    
    Faker::Kpop.iii_groups,
    
    Faker::Kpop.girl_groups,
    
    Faker::Kpop.boy_bands, 
    
    Faker::Kpop.solo]

def address_data
    ticket_full_address = Faker::Address.full_address
    ticket_address = ticket_full_address.split(",")[0]
    ticket_city = ticket_full_address.split(",")[1].strip
    ticket_state = ticket_full_address.split(",")[2].strip.split(" ")[0]
    ticket_zip = ticket_full_address.split(",")[2].strip.split(" ")[1].to_i
    
    {   
        address: ticket_address,
        city: ticket_city,
        state: ticket_state,
        zip: ticket_zip     
    }
end

def artist_data
    name = Faker::Music.band
    genre = Faker::Music.genre
    {
        name: name,
        genre: genre
    }
end

event_venues = ["Madison Square Garden", "Barclay's Center", "Citi Field", "Yankee Stadium", "Metlife Stadium"]

5.times do
    user_data = Faker::Internet.user('username', 'email', 'password')
    user = User.create(user_data)
    event = Event.create(address_data)
    event.name = event_venues.sample
    event.date = Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :long)
    
    
    t = Time.now
    event.time = t.strftime("%I:%M %p")
    event.venue = event_venues.sample
    event.save
    artist = Artist.new(artist_data)
    artist.event_id = event.id
    artist.save
    # event.artist = artist.new

    3.times do
        ticket_name = "#{faker_kpop.sample} concert"
        price = rand(20..10000)
        seat = rand(1..20000)
        ticket_time = Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :long)
        ticket = Ticket.new(
            address_data
        )
        ticket.name = ticket_name
        ticket.seat = seat
        ticket.price = price
        ticket.event_id = event.id
        ticket.user_id = user.id
        ticket.time = ticket_time
        ticket.save
        
    end
end

puts "Seeds Planted!"