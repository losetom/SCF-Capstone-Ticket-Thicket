class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :event_id
end
