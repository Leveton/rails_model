Rails.application.config.middleware.use ExceptionNotifier,
  :email_prefix => "[production] ",
  :sender_address => %{"notifier" <mleveton@gmail.com>},
  :exception_recipients => %w{mleveton@gmail.com} 
