class CaptivateResultsController < ApplicationController
   skip_before_filter :verify_authenticity_token, :only => [:process_results]
   require 'nokogiri'

  def process_results
    @company_name = params[:CompanyName]
    @department_name = params[:DepartmentName]
    @course_name = params[:CourseName]
    @file_name = params[:Filename]
    @file_data = params[:Filedata]
    @user_id = current_user.id
    #@new_file_name = @file_name.split('_').push(@user).join('_')

    file_path = File.join("#{Rails.root}/doc", "CaptivateResults", @company_name, @department_name, @course_name)
    FileUtils.mkdir_p(file_path)
    file_path = File.join(file_path, @file_name)
    handle = File.open(file_path, 'w' )
    handle << @file_data
    handle.close

    file_save = File.open(handle)
    file_iterate = Nokogiri::XML(file_save)
    @courses = file_iterate.xpath('//Course').map do |i|
       {'email' => i.xpath('LearnerID').attr('value'), 'quiz_name' => i.xpath('CourseName').attr('value'), 'section' => i.xpath('CompanyName').attr('value'), 'total_questions' => i.xpath('TotalQuestions').attr('value'), 'difficulty' => i.xpath('DepartmentName').attr('value')}
      end
    @quizdata = file_iterate.xpath('//Course/Result/CoreData').map do |i|
       {'score' => i.xpath('RawScore').attr('value'), 'time_taken' => i.xpath('SessionTime').attr('value')}
      end
    @interactions = file_iterate.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value')}
      end

    Assessment.create!(:user_id => @user_id, :section => @company_name, :title => @course_name, :difficulty => @department_name)
     @email = current_user.email
     ActiveRecord::Base.connection.execute %(UPDATE users SET assessments = assessments+1 WHERE email = "#{@email}")
     @user = current_user.username
     UserMailer.quiz_results(@user, @email, @courses, @quizdata, @interactions).deliver
  end

end
