json.array! @movies.each do |movie|
	json.id movie.id
	json.title movie.title
	json.year movie.year
	json.director movie.director
	json.image movie.image
	json.genre movie.genre
	json.description movie.description
	json.rating movie.rating
	json.quote movie.quote
end