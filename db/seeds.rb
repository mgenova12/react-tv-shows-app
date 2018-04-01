# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

# Movie.destroy_all

10.times do 
	Movie.create(title: Faker::Book.title, year: rand(1900..2018) , network: Faker::Company.name, category: Faker::Book.genre , description: Faker::Lorem.paragraph(3, false, 5) )
end