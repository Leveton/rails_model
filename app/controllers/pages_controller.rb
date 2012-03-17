class PagesController < ApplicationController
   before_filter :authenticate_user!, :only => [:chat, :show, :quiz_cenLR, :quiz_cenRC, :quiz_cenAR]
   #require "juggernaut"
   before_filter :authenticate_admin!, :only => [:sitemap]

   def quiz_cenLR
   end
   def quiz_cenRC
   end

   def quiz_cenAR
   end

   def chat
     respond_to do |format|
      format.html
      format.js
      end
   end

   def about
     respond_to do |format|
      format.html
      format.js
      end
   end

   def practice
    @user = current_user
    respond_to do |format|
      format.html
      format.js
      end
    end

  def easymedhard
    @user = current_user
    respond_to do |format|
      format.html
      format.js
      end
    end

  def coming_soon
    render :layout => false
  end

  def show
    @user = User.find(params[:id])
    @schedules = current_user.schedules.paginate(:page => params[:page])
    @title = @user.name
  end

  def legal
    render :layout => false
  end

  def privacy
    render :layout => false
  end

  def index
    @title = "Home"
    respond_to do |format|
      format.html
      format.js
    end
    if user_signed_in?
    @schedules = current_user.schedules.paginate(:page => params[:page])
    end
  end

  def create
    @newsletter = Page.new(:email => params[:email])
    if @newsletter.save
      @newsletteremail = params[:email]
      UserMailer.newsletter_signup(@newsletteremail).deliver
      redirect_to root_path, :flash => { :success => "newsletter signup success!" }
    else
        err = ''
          @newsletter.errors.full_messages.each do |m|
        err << m
      end
      redirect_to root_path, :flash => { :alert => "#{err}, please try again" }
    end
  end


  def assessments_index_path
  end


  def help
    @title = "Help"
  end

  def faq
    respond_to do |format|
      format.html
      format.js
      end
  end

  def tutors
    @title = "Tutors"
  end

  def exercises
    @title = "Exercises"

  end

  def diagnostic
    @title = "Diagnostic"
  end

  def pricing
    @title = "Pricing"
  end

  def testimonials
    @title = "Testimonials"
  end

  def blog
    @title = "Blog"
    respond_to do |format|
      format.html
      format.js
      end
  end

  def news
    @title = "News"
  end

  def compare
    @title = "Compare"
    respond_to do |format|
      format.html
      format.js
      end
  end

end
