class TicketSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :seat, :time
end
