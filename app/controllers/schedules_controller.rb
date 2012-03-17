class SchedulesController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:match_dates, :byphone]
  before_filter :authenticate_user!, :except => [:tutoring]

def temp
  @schedules = Schedule.all
  @schedules_dates = @schedules.collect {|i| i.date}
end

def match_dates
  date_from_ajax = params[:matched_date]
  reduce = Schedule.where(:date => date_from_ajax)
  hour_on_date = reduce.collect {|x| x.hour}
  @new_dates = hour_on_date
  render :layout => false
end
   def destroy
     @schedule_id = Schedule.find(params[:id])
     @schedule_date = @schedule_id[:date]
     @schedule_hour = @schedule_id[:hour]
     @username = current_user.username
     @email = current_user.email
     UserMailer.schedule_cancellation(@schedule_id, @schedule_date, @schedule_hour, @username, @email).deliver
     redirect_to user_path(current_user.id), :flash => { :success => "Your cancellation is being processed." }
   end

   def bychat
     @schedules = Schedule.create(params[:schedules])
     respond_to do |format|
      format.html
      format.js
      end
   end

   def byphone
  #@schedules_total = Schedule.all
  #@schedules_dates = @schedules_total.collect {|i| i.date}
  @schedules_hours = Schedule.where(:date => 'current_date')
  #@s = @schedules_dates.to_a
  @schedules = Schedule.create(params[:schedules])
 
     respond_to do |format|
      format.html
      format.js
      end
   end

   def oneonone_temp
   @schedules = Schedule.create(params[:schedules])
     respond_to do |format|
      format.html
      format.js
      end
   end

   def chat_session
     user_id = current_user.id
     paid_check = Payment.where(:product => "tutoring", :user_id => "#{user_id}")
     if !paid_check.empty?
       @user = current_user.username
       redirect_to "http://192.168.1.2:8085/?0,0,0,0,0&nn=#{@user}"
     elsif paid_check.empty? && current_user.tutoring_credits >= 1
       email_iden = current_user.email
       @user = current_user.username
       redirect_to "http://192.168.1.2:8085/?0,0,0,0,0&nn=#{@user}"
       ActiveRecord::Base.connection.execute %(UPDATE users SET tutoring_credits = tutoring_credits-1 WHERE email = "#{email_iden}")
     else
       redirect_to tutoring_bychat_path, :flash => { :alert => "You do not have any tutoring credits. Buy one with PayPal below." }
     end
   end

   def tutoring
    respond_to do |format|
      format.html
      format.js
      end
   end

  def oneonone
    redirect_to tutoring_oneonone_temp_path, :flash => { :alert => "One on one tutoring is currently only being held in the Miami/Ft.Lauderdale area" }
  end

  def new
    @user = current_user
    @title = @user.username
    @schedules = Schedule.create(params[:schedules])
  end

  #def create
    #schedule = Schedule.create!(params[:schedules])
    #render :json => schedule
    #redirect_to tutoring_buy_path
  #end

  def create
    @schedules = current_user.schedules.build(params[:schedules])
    if @schedules.save
      redirect_to tutoring_buy_path
    else
      err = ''
      @schedules.errors.full_messages.each do |m|
      err << m
    end

      redirect_to tutoring_path, :flash => { :alert => "#{err}, please try again" }
    end
  end


end
