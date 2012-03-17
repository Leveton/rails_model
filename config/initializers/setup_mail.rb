ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "prepcloud.com",
  :user_name            => "tutoring@prepcloud.com",
  :password             => "arthuragee",
  :authentication       => "plain",
  :enable_starttls_auto => true
}

#attachments.inline['prepcloud_beta.png'] = File.read('#{Rails.root}/app/assets/images/prepcloud_beta.png')
#require 'development_mail_interceptor'
#ActionMailer::Base.default_url_options[:host] = "localhost:3000"
#Mail.register_interceptor(DevelopmentMailInterceptor) if Rails.env.development?
