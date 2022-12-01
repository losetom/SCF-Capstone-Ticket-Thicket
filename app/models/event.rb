class Event < ApplicationRecord
    has_many :tickets
    belongs_to :artist
end
