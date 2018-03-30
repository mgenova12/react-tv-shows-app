Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get '/movies' => 'movies#index'
      get '/movies/:id' => 'movies#show'
    end
  end

  get '/' => 'shows#index'



end
