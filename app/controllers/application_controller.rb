# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  rescue_from(ActiveRecord::RecordInvalid, {with: :render_unprocessable_entity} )
  include ActionController::Cookies
  before_action :current_user
    
    def current_user
      @user = User.find_by(id: session[:user_id])
    end

    def render_unprocessable_entity(exception)
      render json: exception
    end

    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end
end