# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  rescue_from(ActiveRecord::RecordInvalid, {with: :render_unprocessable} )
  include ActionController::Cookies
  before_action :current_user
    
    def current_user
      @user = User.find_by(id: session[:user_id])
    end
  
    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end
end