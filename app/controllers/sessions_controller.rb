class SessionsController < ApplicationController
  skip_before_action(:current_user)

  # /login
  def create
    # find a user by username
    user = User.find_by(email: params[:email])
    
    # verify that the user is who they say they are by checking the password is correct
    if user && user.authenticate(params[:password])
      
      # set the session[:user_id] to the found and authorized user
      session[:user_id] = user.id
      # binding.pry
    # render user w/ status code of OK or created
      render json: {user: user}, status: :created
    else
      render json: { errors: ["Unauthorized"] }, status: :unauthorized
    end
  end

  # /logout
  def destroy
    session.delete[:user_id]
    # session[:user_id] = nil
    head :no_content
  end
end
