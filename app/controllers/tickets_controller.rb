class TicketsController < ApplicationController
    def index
        render json: Ticket.all
    end

    def create
        ticket = Ticket.create!(ticket_params)
        render json: ticket, status: :created
    end

    def update
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            ticket.update(ticket_params)
            render json: ticket
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end

    def show
        ticket = Ticket.find_by(id: params[:id])
        if ticket
            render json: ticket
        else
            render json: { error: "Ticket not found" }, status: :not_found
        end
    end

    def destroy
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