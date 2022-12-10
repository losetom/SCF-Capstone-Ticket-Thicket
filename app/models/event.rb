class Event < ApplicationRecord
    has_many :tickets
    has_many :users, through: :tickets
    has_one :artist
end
