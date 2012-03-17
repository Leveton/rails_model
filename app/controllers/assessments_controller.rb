class AssessmentsController < ApplicationController
   before_filter :authenticate_user!
   #skip_before_filter :verify_authenticity_token, :only => [:script1]
       require 'nokogiri'

def admin_block
end

def index
    respond_to do |format|
      format.html
      format.js
      end
   end


def show
    nokogiri_index("#{Rails.root}/doc/CaptivateResults/Logical Reasoning/easier/preptest61 easier quiz", /^PrepTest61_easier_quiz_#{current_user.id}_[0-9]*\.xml/)
     unless @nokogiri.nil?
     @easy_courses = @nokogiri.xpath('//Course').map do |i|
       {'quiz_name' => i.xpath('CourseName').attr('value'), 'section' => i.xpath('CompanyName').attr('value'), 'total_questions' => i.xpath('TotalQuestions').attr('value'), 'difficulty' => i.xpath('DepartmentName').attr('value')}
      end
     @easy_quizdata = @nokogiri.xpath('//Course/Result/CoreData').map do |i|
       {'score' => i.xpath('RawScore').attr('value'), 'time_taken' => i.xpath('SessionTime').attr('value')}
      end
     @easy_interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value')}
      end
    end

    nokogiri_index("#{Rails.root}/doc/CaptivateResults/Logical Reasoning/medium/preptest61 medium quiz", /^PrepTest61_medium_quiz_#{current_user.username}_[0-9]*\.xml/)
    unless @nokogiri.nil?
    @med_courses = @nokogiri.xpath('//Course').map do |i|
       {'quiz_name' => i.xpath('CourseName').attr('value'), 'section' => i.xpath('CompanyName').attr('value'), 'total_questions' => i.xpath('TotalQuestions').attr('value'), 'difficulty' => i.xpath('DepartmentName').attr('value')}
      end
     @med_quizdata = @nokogiri.xpath('//Course/Result/CoreData').map do |i|
       {'score' => i.xpath('RawScore').attr('value'), 'time_taken' => i.xpath('SessionTime').attr('value')}
      end
     @med_interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value')}
      end
    end

    nokogiri_index("#{Rails.root}/doc/CaptivateResults/Logical Reasoning/harder/preptest61 harder quiz", /^PrepTest61_harder_quiz_#{current_user.username}_[0-9]*\.xml/)
     unless @nokogiri.nil?
     @hard_courses = @nokogiri.xpath('//Course').map do |i|
       {'quiz_name' => i.xpath('CourseName').attr('value'), 'section' => i.xpath('CompanyName').attr('value'), 'total_questions' => i.xpath('TotalQuestions').attr('value'), 'difficulty' => i.xpath('DepartmentName').attr('value')}
      end
     @hard_quizdata = @nokogiri.xpath('//Course/Result/CoreData').map do |i|
       {'score' => i.xpath('RawScore').attr('value'), 'time_taken' => i.xpath('SessionTime').attr('value')}
      end
     @hard_interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value')}
      end
    end

    nokogiri_index("#{Rails.root}/doc/CaptivateResults/Reading Comprehension/medium/pt61 medium reading quiz", /^preptest61_reading_quiz1_#{current_user.username}_[0-9]*\.xml/)
     unless @nokogiri.nil?
     @RC_quiz1_courses = @nokogiri.xpath('//Course').map do |i|
       {'quiz_name' => i.xpath('CourseName').attr('value'), 'section' => i.xpath('CompanyName').attr('value'), 'total_questions' => i.xpath('TotalQuestions').attr('value'), 'difficulty' => i.xpath('DepartmentName').attr('value')}
      end
     @RC_quiz1_quizdata = @nokogiri.xpath('//Course/Result/CoreData').map do |i|
       {'score' => i.xpath('RawScore').attr('value'), 'time_taken' => i.xpath('SessionTime').attr('value')}
      end
     @RC_quiz1_interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value')}
      end
    end

    nokogiri_index("#{Rails.root}/doc/CaptivateResults/Analytical Reasoning/medium/pt61 medium games quiz", /^pt61_games_quiz1_#{current_user.username}_[0-9]*\.xml/)
     unless @nokogiri.nil?
     @AR_quiz1_courses = @nokogiri.xpath('//Course').map do |i|
       {'quiz_name' => i.xpath('CourseName').attr('value'), 'section' => i.xpath('CompanyName').attr('value'), 'total_questions' => i.xpath('TotalQuestions').attr('value'), 'difficulty' => i.xpath('DepartmentName').attr('value')}
      end
     @AR_quiz1_quizdata = @nokogiri.xpath('//Course/Result/CoreData').map do |i|
       {'score' => i.xpath('RawScore').attr('value'), 'time_taken' => i.xpath('SessionTime').attr('value')}
      end
     @AR_quiz1_interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value')}
      end
    end
end

def preptest61_easier_quiz_show
    nokogiri_index("#{Rails.root}/doc/CaptivateResults/Logical Reasoning/easier/preptest61 easier quiz", /^PrepTest61_easier_quiz_#{current_user.username}_[0-9]*\.xml/)
    unless @nokogiri.nil?
    @courses = @nokogiri.xpath('//Course').map do |i|
       {'question_type' => i.xpath('CompanyName').attr('value'), 'quiz_name' => i.xpath('CourseName').attr('value')}
      end
     @interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value'), 'question_number' => i.xpath('InteractionID').attr('value'), 'correct_answer' => i.xpath('CorrectResponse').attr('value'), 'student_answer' => i.xpath('StudentResponse').attr('value'), 'latency' => i.xpath('Latency').attr('value')}
      end
    end
end

  def preptest61_medium_quiz_show
    nokogiri_index("#{Rails.root}/doc/CaptivateResults/Logical Reasoning/medium/preptest61 medium quiz", /^PrepTest61_medium_quiz_#{current_user.username}_[0-9]*\.xml/)
    unless @nokogiri.nil?
    @courses = @nokogiri.xpath('//Course').map do |i|
       {'question_type' => i.xpath('CompanyName').attr('value'), 'quiz_name' => i.xpath('CourseName').attr('value')}
      end
     @interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value'), 'question_number' => i.xpath('InteractionID').attr('value'), 'correct_answer' => i.xpath('CorrectResponse').attr('value'), 'student_answer' => i.xpath('StudentResponse').attr('value'), 'latency' => i.xpath('Latency').attr('value')}
      end
    end
end
  def preptest61_harder_quiz_show
   nokogiri_index("#{Rails.root}/doc/CaptivateResults/Logical Reasoning/harder/preptest61 harder quiz", /^PrepTest61_harder_quiz_#{current_user.username}_[0-9]*\.xml/)
    unless @nokogiri.nil?
    @courses = @nokogiri.xpath('//Course').map do |i|
       {'question_type' => i.xpath('CompanyName').attr('value'), 'quiz_name' => i.xpath('CourseName').attr('value')}
      end
     @interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value'), 'question_number' => i.xpath('InteractionID').attr('value'), 'correct_answer' => i.xpath('CorrectResponse').attr('value'), 'student_answer' => i.xpath('StudentResponse').attr('value'), 'latency' => i.xpath('Latency').attr('value')}
      end
   end
end

def reading_quiz_show
   nokogiri_index("#{Rails.root}/doc/CaptivateResults/Reading Comprehension/medium/pt61 medium reading quiz", /^preptest61_reading_quiz1_#{current_user.username}_[0-9]*\.xml/)
    unless @nokogiri.nil?
    @courses = @nokogiri.xpath('//Course').map do |i|
       {'question_type' => i.xpath('CompanyName').attr('value'), 'quiz_name' => i.xpath('CourseName').attr('value')}
      end
     @interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value'), 'question_number' => i.xpath('InteractionID').attr('value'), 'correct_answer' => i.xpath('CorrectResponse').attr('value'), 'student_answer' => i.xpath('StudentResponse').attr('value'), 'latency' => i.xpath('Latency').attr('value')}
      end
   end
end

def games_quiz_show
   nokogiri_index("#{Rails.root}/doc/CaptivateResults/Analytical Reasoning/medium/pt61 medium games quiz", /^pt61_games_quiz1_#{current_user.username}_[0-9]*\.xml/)
     unless @nokogiri.nil?
     @courses = @nokogiri.xpath('//Course').map do |i|
       {'question_type' => i.xpath('CompanyName').attr('value'), 'quiz_name' => i.xpath('CourseName').attr('value')}
      end
     @interactions = @nokogiri.xpath('//Course/Result/InteractionData/Interactions').map do |i|
       {'date' => i.xpath('Date').attr('value'), 'question_number' => i.xpath('InteractionID').attr('value'), 'correct_answer' => i.xpath('CorrectResponse').attr('value'), 'student_answer' => i.xpath('StudentResponse').attr('value'), 'latency' => i.xpath('Latency').attr('value')}
      end
   end
end


def preptest61_easier_quiz
   dollar_quiz("LR_quiz", pt61_easier_buy_path)
end

def preptest61_medium_quiz
   dollar_quiz("LR_quiz", pt61_medium_buy_path)
end

def preptest61_harder_quiz
  dollar_quiz("LR_quiz", pt61_harder_buy_path)
end


def preptest61_reading_quiz1
  dollar_quiz("RC_quiz", pt61_reading_quiz_buy_path)
end


def pt61_games_quiz1
  dollar_quiz("AR_quiz", pt61_games_quiz_buy_path)
end


  def create
  end


  private
    def user_id
      current_user.id
    end

    def email_iden
      current_user.email
    end
end
