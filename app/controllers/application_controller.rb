class ApplicationController < ActionController::Base
  protect_from_forgery
  #before_filter :ensure_domain


def nokogiri_index(dir, user_dir)
  path = File.directory?dir
  if path == true
    path = dir
    Dir.foreach(path) do |x|
    if x =~ user_dir
      path_user = File.open("#{path}/#{x}")
      @nokogiri = Nokogiri::XML(path_user)
    end
  end
end
end


def dollar_quiz(quiz_type, redirect)
  paid_check = Payment.where(:product => quiz_type, :user_id => "#{user_id}")
    if !paid_check.empty?
      return
    elsif paid_check.empty? && current_user.quiz_credits >= 1
      ActiveRecord::Base.connection.execute %(UPDATE users SET quiz_credits = quiz_credits-1 WHERE email = "#{email_iden}")
    else
      redirect_to redirect, :flash => { :alert => "You do not have any quiz credits. Buy one with PayPal below." }
    end
end











end 
