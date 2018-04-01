class AddMovieFeilds < ActiveRecord::Migration[5.0]
  def change
  	add_column :movies, :rating, :string

  	add_column :movies, :quote, :string
	
	rename_column :movies, :category, :genre
	rename_column :movies, :network, :director

  end
end
