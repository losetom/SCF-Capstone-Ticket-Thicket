class TicketsController < ApplicationController
    # /GET
    def index
        render json: Ticket.all
    end

    # /POST
    def create
        # binding.pry
        event = Event.create(name: ticket_params[:name])
        ticket = Ticket.new(ticket_params)
        ticket.event_id = event.id
        ticket.user_id = session[:user_id]
        ticket.save
        render json: ticket, status: :created
    end

    # /PATCH
    def update
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            ticket.update(ticket_params)
            render json: ticket
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end

    # /GET/id
    def show
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            render json: ticket
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end

    # /DELETE
    def destroy
        # binding.pry
        ticket = Ticket.find_by(id: params[:id])
        if ticket 
            ticket.destroy
            head :no_content
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end

    end

    private

    def ticket_params
        params.permit(:name, :address, :city, :state, :zip, :seat, :time)
    end
end