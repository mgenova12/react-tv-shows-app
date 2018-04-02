Rails.application.routes.draw do

  get '/' => 'movies#index'
  get '/:id' => 'movies#show'
  
  namespace :api do
    namespace :v1 do
      get '/movies' => 'movies#index'
  	  post '/movies' => 'movies#create'
      get '/movies/:id' => 'movies#show'
      delete '/movies/:id' => 'movies#destroy'
    end
  end

end
