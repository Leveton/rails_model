class UserMailer < ActionMailer::Base
  default :from => "prepcloud"

  def medal_won(username, email)
    @username = username
    @email = email
    @badge = "Quarterback"
    attachments.inline["quarterback4.png"] = File.read("#{Rails.root}/public/images/quarterback4.png")
    mail(:to => "<#{email}>", :from => "donotreply", :subject => "You've leveled up")
  end
  def schedule_cancellation(schedule_id, schedule_date, schedule_hour, username, email)
    @schedule_id = schedule_id
    @schedule_date = schedule_date
    @schedule_hour = schedule_hour
    @username = username
    @email = email
    mail(:to => ["tutoring@prepcloud.com", "<#{email}>"], :from => "donotreply", :subject => "cancelled appointment")
  end

  def tutoring_confirmation(user, email, address, schedules)
    @user = user
    @email = email
    @address = address
    @schedules = schedules
    attachments.inline["prepcloud_email.png"] = File.read("#{Rails.root}/public/images/prepcloud_email.png")
    mail(:to => "#{user} <#{email}>", :subject => "Tutoring Details and receipt")
    mail(:to => "tutoring@prepcloud.com", :subject => "Tutoring Details and receipt")
  end

  def quiz_confirmation(user, email, address)
    @user = user
    @email = email
    @address = address
    attachments.inline["prepcloud_email.png"] = File.read("#{Rails.root}/public/images/prepcloud_email.png")
    mail(:to => "#{user} <#{email}>", :from => "prepcloud", :subject => "PrepCloud receipt")
    mail(:to => "tutoring@prepcloud.com", :subject => "PrepCloud receipt")
  end

  def quiz_results(user, email, courses, quizdata, interactions)
    @user = user
    @email = email
    @courses = courses
    @quizdata = quizdata
    @interactions = interactions
    attachments.inline["prepcloud_email.png"] = File.read("#{Rails.root}/public/images/prepcloud_email.png")
    mail(:to => "#{user} <#{email}>", :from => "prepcloud", :subject => "PrepCloud quiz result")
  end

  def newsletter_signup(newsletteremail)
    @email = newsletteremail
    mail(:to => "tutoring@prepcloud.com", :from => "newsletter", :subject => "Newsletter Signup")
  end
end
