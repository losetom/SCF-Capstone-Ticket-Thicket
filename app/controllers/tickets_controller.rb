class TicketsController < ApplicationController
    def index
        render json: Ticket.all
    end
end