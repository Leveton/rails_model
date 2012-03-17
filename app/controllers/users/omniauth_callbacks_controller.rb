class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  
  def facebook
    @user = User.find_for_facebook_oauth(request.env["omniauth.auth"], current_user)
    #@user.skip_confirmation!
  if @user.persisted?
      #sign_in(@user, User.find(params[:id]))
      #flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Facebook"
      #sign_in_and_redirect @user, :event => :authentication
      #sign_in @user, :event => :authentication
      sign_in @user
      @fname = @user.username
      redirect_to root_path, :flash => { :success => "Welcome #{@fname}!  Play a puzzle, practice with real test questions, or schedule an appointement." }
  else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

 def yahoo
    @user = User.find_for_open_id(request.env["omniauth.auth"], current_user)
    #@user.skip_confirmation!
    if @user.persisted?
      sign_in @user
      @yname = @user.username
      redirect_to root_path, :flash => { :success => "Welcome #{@yname}!  Play a puzzle, practice with real test questions, or schedule an appointement." }
    else
      session["devise.yahoo_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

 def google
    @user = User.find_for_open_id(request.env["omniauth.auth"], current_user)
    #@user.skip_confirmation!
    if @user.persisted?
      #sign_in @user, :event => :authentication
      sign_in @user
      @gname = @user.username
      redirect_to root_path, :flash => { :success => "Welcome #{@gname}!  Play a puzzle, practice with real test questions, or schedule an appointement." }
      #flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Google"
      #sign_in_and_redirect @user, :event => :authentication
    else
      session["devise.google_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end
   
end

