
# INDEX ----------
get '/bears' do
  @bears = Bear.all
  erb :"bears/index"
end

# NEW -----------
get '/bears/new' do
  @bear = Bear.new
  erb :"bears/new"
end

# CREATE ---------
post '/bears' do
  @bear = Bear.new(params[:bear])
  if @bear.save
    redirect "/bears"
  else
    status 400
    erb :"bears/new"
  end
end

# SHOW ----------
get '/bears/:id' do
  @bear = Bear.where(id: params[:id]).first
  if @bear
    erb :"bears/show"
  else
    status 404
    bear_not_found
  end
end

get '/bears/:id/edit' do
  @bear = Bear.where(id: params[:id]).first
  if @bear
    erb :"bears/edit"
  else
    status 404
    bear_not_found
  end
end

put '/bears/:id' do
  @bear = Bear.where(id: params[:id]).first
  @bear.assign_attributes(params[:bear])
  if @bear.save
    redirect "/bears/#{params[:id]}"
  else
    status 400
    erb :"bears/edit"
  end
end

delete '/bears/:id' do
  bear = Bear.where(id: params[:id]).first
  if bear
    bear.destroy
    redirect '/bears'
  else
    status 404
    bear_not_found
  end
end

# post '/bears' do
#   p params
#   bear = Bear.new(params)
#   p bear

#   bear.to_json
# end
