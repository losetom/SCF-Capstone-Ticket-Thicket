class UsersController < ApplicationController
   # rescue_from(ActiveRecord::RecordInvalid, {with: :render_unprocessable} )
    before_action(:check_logged_in_user, only: [:index, :show])
    skip_before_action :check_logged_in_user, only: [:create, :show]
    # skip_before_action :current_user, only: [:create]

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
    # binding.pry
        user = User.create!(user_params)
    # If user was created
        if user && user.valid?
    # Set our session[:user_id] -> log a user in on the backend
        session[:user_id] = user.id
    # Respond to client with JSON and status 
        render json: user, status: :created
        end
    end

    def update
        user = User.find(params[:id])
        # binding.pry
        user.update(username: params[:_json])
        render json: user, status: :ok
    end

    # / ME
    def show
        if session[:user_id]
            current_user = User.find_by(id: session[:user_id])                   
            render json: current_user, status: :ok
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
        # render json: @current_user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        session.delete :user_id
        head :no_content
    end


    private

    def render_unprocessable(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :render_unprocessable_entity
    end

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end