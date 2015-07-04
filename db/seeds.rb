require 'faker'

species = %W(flying jumping loving rocket dinasaur super angel piggly)

species.each do |species|
  Bear.create(
    name: Faker::Name.name.split[0],
    color: Faker::Commerce.color,
    species: species
  )
end
