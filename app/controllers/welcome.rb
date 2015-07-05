require 'httparty'
require 'json'
require 'awesome_print'

get '/' do
  # if current_user
  #   erb :welcome
  # else
  #   erb :login
  # end
  erb :welcome
end

get '/login-via-github' do

end

get '/oauth/callback' do

end

get '/emojis' do
  headers = { "User-Agent" => "Super-Fun-Summer" }
  @emojis = HTTParty.get("https://api.github.com/emojis", headers: headers)
  ap @emojis
  erb :_emojis
end

get '/soccer' do
  client = ApiBoy::FootballData.new
  @logos = client.get_teams
  erb :logos
end

get '/button' do
  erb :button
end

get '/map' do
  erb :map
end



