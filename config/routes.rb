Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get 'movies/index'
    end
  end

  get '/' => 'shows#index'



end
