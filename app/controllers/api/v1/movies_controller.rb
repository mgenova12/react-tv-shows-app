class Api::V1::MoviesController < ApplicationController
   skip_before_action :verify_authenticity_token

  def index
  	@movies = Movie.all

  	render 'index.json.jbuilder'
  end

  def show 
    @movie = Movie.find_by(id: params[:id])

    render 'show.json.jbuilder'
  end

  def create
  	@movie = Movie.create!(
  	  title: params[:title],
      year: params[:year],
      image: params[:image],
      director: params[:director],
      genre: params[:genre],
      rating: params[:rating],
      quote: params[:quote],
      description: params[:description]
  	)

  	render 'show.json.jbuilder'
  end


end
