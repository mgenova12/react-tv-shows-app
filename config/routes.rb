Rails.application.routes.draw do

  get '/' => 'movies#index'
  
  namespace :api do
    namespace :v1 do
      get '/movies' => 'movies#index'
      get '/movies/:id' => 'movies#show'
    end
  end
  
end
