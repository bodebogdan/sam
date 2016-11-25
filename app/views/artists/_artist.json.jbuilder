json.extract! artist, :id, :name, :country, :instrument, :phone_number, :created_at, :updated_at
json.url artist_url(artist, format: :json)