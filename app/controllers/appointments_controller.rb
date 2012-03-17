class AppointmentsController < ApplicationController
  before_filter :authenticate_user!, :except => [:tutoring]

def index
  date_from_ajax = params[:matched_date]
  reduce = Appointment.where(:date => date_from_ajax)
  hour_on_date = reduce.collect {|x| x.hour}
  @new_dates = hour_on_date
  render :layout => false
end

  def new
    @appointments = Appointment.create
      respond_to do |format|
        format.html
        format.js
      end
   end
 

def create
   @appointment = Appointment.create(params[:appointments])
    if @appointment.save
      redirect_to tutoring_buy_path
    else
      err = ''
      @appointment.errors.full_messages.each do |m|
      err << m
    end

      redirect_to tutoring_path, :flash => { :alert => "#{err}, please try again" }
    end
  end

   def destroy
     @appointment_id = Appointment.find(params[:id])
     @appointment_date = @appointment_id[:date]
     @appointment_hour = @appointment_id[:hour]
     @username = current_user.username
     @email = current_user.email
     UserMailer.appointment_cancellation(@appointment_id, @appointment_date, @appointment_hour, @username, @email).deliver
     redirect_to user_path(current_user.id), :flash => { :success => "Your cancellation is being processed." }
   end  
  
  def show
    appointments = Appointment.where(:user_id => current_user.id)
    @appointments_date = appointments.collect {|x| x.date}
    @appointments_hour = appointments.collect {|x| x.hour}
    @appointments_phone = appointments.collect {|x| x.phone_number}
    @appointments_location = appointments.collect {|x| x.location}
    @appointments_type = appointments.collect {|x| x.tutoring_type}
  end
  
  def byphone
    #@appointments_total = Schedule.all
    #@appointments_dates = @appointments_total.collect {|i| i.date}
    @appointments_hours = Appointment.where(:date => 'current_date')
    #@s = @appointments_dates.to_a
    @appointments = Appointment.create(params[:appointments])
 
     respond_to do |format|
      format.html
      format.js
      end
   end

  def oneonone
    redirect_to tutoring_oneonone_temp_path, :flash => { :alert => "One on one tutoring is currently only being held in the Miami/Ft.Lauderdale area" }
  end

   def oneonone_temp
   @appointments = Appointment.create(params[:appointments])
     respond_to do |format|
      format.html
      format.js
      end
   end
   
    def tutoring
      respond_to do |format|
        format.html
        format.js
      end
   end
  
end
