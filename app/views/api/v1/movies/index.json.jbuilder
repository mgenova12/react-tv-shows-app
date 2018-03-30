json.array! @movies.each do |movie|
	json.id movie.id
	json.title movie.title
	json.year movie.year
	json.network movie.network
	json.image movie.image
	json.category movie.category
	json.description movie.description
end