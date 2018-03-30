class Api::V1::MoviesController < ApplicationController
  def index
  	@movies = Movie.all

  	render 'index.json.jbuilder'
  end

  def show 
  	@movie = Movie.find_by(id: params[:id])

  	render 'show.json.jbuilder'
  end

end
