class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :date, :time, :city, :state, :zip, :venue
end
