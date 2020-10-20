
class Api::V1::AuthController < ApplicationController

  def create

    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      render json: user
    else
      render json: { error: 'Invalid username or password.'}
    end


  end

end






















    # if user
      # if user.authenticate(params[:password])
        # render json: user
        # #proceed to verify send user to FE
      # else
        # render json: { error: 'Invalid username or password.'}
      # end
    # else
      # render json: { error: 'Invalid username or password.'}
    # end



    # verify that a user exists with the same username as the one provided in params
    # if no user is found:
    #   send an error msg that the user/pw is invalid
    # else if user does exist
    #   verify the password in params against the db password
    #   if no match:
    #   send an error msg that the user/pw is invalid
    #   else:
    #    Success! send the user back to the frontend





















































  # def create
    # user = User.find_by(username: params[:username])
    # if user && user.authenticate(params[:password])
      # token = JWT.encode({user_id: user.id}, 'secret', 'HS256')
      # render json: { id: user.id, username: user.username, token: token}
    # else
      # render json: { error: 'Not Authorized'}, status: 401
    # end
  # end

  # def show
    # token = request.headers[:Authorization]
    # decoded_token = JWT.decode token, 'secret', true, { algorithm: 'HS256' }
    # user_id = decoded_token.first['user_id']
    # user = User.find(user_id)
    # if user
      # render json: { id: user.id, username: user.username, token: token }
    # else
      # render json: { error: 'Not Authorized'}, status: 401
    # end
  # end
