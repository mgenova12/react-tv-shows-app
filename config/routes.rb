Rails.application.routes.draw do

  get '/' => 'movies#index'
  get '/:id' => 'movies#show'
  
  namespace :api do
    namespace :v1 do
      get '/movies' => 'movies#index'
      get '/movies/:id' => 'movies#show'
    end
  end

end
