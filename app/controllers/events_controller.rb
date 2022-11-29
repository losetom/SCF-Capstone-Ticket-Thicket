class EventsController < ApplicationController
    has_many :tickets
    belongs_to :artists
end
