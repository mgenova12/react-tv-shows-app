class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :year
      t.string :network
      t.string :image
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
