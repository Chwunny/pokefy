UPDATE album_card
SET favorite = NOT favorite
WHERE id = $1