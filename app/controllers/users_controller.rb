class UsersController < ApplicationController
   # rescue_from(ActiveRecord::RecordInvalid, {with: :render_unprocessable} )
    before_action(:check_logged_in_user, only: :index)
    skip_before_action :check_logged_in_user, only: :create

    def check_logged_in_user
        @current_user = User.find_by(id: session[:user_id])
        if !@current_user
            render json: { errors: ["Must be logged in"] }, status: :unauthorized
        end
    end

    def index 
        users = User.all
        render json: users
    end

    def create
    # Create var - save newly created instance using the params
        user = User.create!(user_params)
    # Set our session[:user_id] -> log a user in on the backend
        session[:user_id] = user.id
    # Respond to client with JSON and status 
        render json: user, status: :created
    end


    private

    def render_unprocessable(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :render_unprocessable_entity
    end

    def user_params
        params.permit(:email, :password, :password_confirmation)
    end

end