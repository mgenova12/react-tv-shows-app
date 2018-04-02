class MoviesController < ApplicationController
  layout 'movie'
  def index

  end

  def show
  	@movies = Movie.all 
  	@movie_id = Movie.find_by(id: params[:id]).id
  end


end
