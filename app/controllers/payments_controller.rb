class PaymentsController < ApplicationController
  before_filter :authenticate_user!
  include ActiveMerchant::Billing
  
def pt61_easier_buy
end

def pt61_medium_buy
end

def pt61_harder_buy
end

def tutoring_buy
end

def checkout_quiz_LR
  setup_response = gateway.setup_purchase(100,
    :ip                => request.remote_ip,
    :return_url        => url_for(:action => 'confirm_quiz_LR', :only_path => false),
    :cancel_return_url => url_for(:action => 'cancel', :only_path => false)
  )
  redirect_to gateway.redirect_url_for(setup_response.token)
end

def checkout_quiz_RC
  setup_response = gateway.setup_purchase(100,
    :ip                => request.remote_ip,
    :return_url        => url_for(:action => 'confirm_quiz_RC', :only_path => false),
    :cancel_return_url => url_for(:action => 'cancel', :only_path => false)
  )
  redirect_to gateway.redirect_url_for(setup_response.token)
end

def checkout_quiz_AR
  setup_response = gateway.setup_purchase(100,
    :ip                => request.remote_ip,
    :return_url        => url_for(:action => 'confirm_quiz_AR', :only_path => false),
    :cancel_return_url => url_for(:action => 'cancel', :only_path => false)
  )
  redirect_to gateway.redirect_url_for(setup_response.token)
end

def checkout_test
  setup_response = gateway.setup_purchase(1000,
    :ip                => request.remote_ip,
    :return_url        => url_for(:action => 'confirm_test', :only_path => false),
    :cancel_return_url => url_for(:action => 'cancel', :only_path => false)
  )
  redirect_to gateway.redirect_url_for(setup_response.token)
end

def checkout_tutoring
  setup_response = gateway.setup_purchase(7000,
    :ip                => request.remote_ip,
    :return_url        => url_for(:action => 'confirm_tutoring', :only_path => false),
    :cancel_return_url => url_for(:action => 'cancel', :only_path => false)
  )
  redirect_to gateway.redirect_url_for(setup_response.token)
end

def confirm_quiz_LR
  redirect_to :action => 'cancel' unless params[:token]
  
  details_response = gateway.details_for(params[:token])
  
  if !details_response.success?
    @message = details_response.message
    render :action => 'error'
    return
  end
    
  @address = details_response.address
end

def confirm_quiz_RC
  redirect_to :action => 'cancel' unless params[:token]
  
  details_response = gateway.details_for(params[:token])
  
  if !details_response.success?
    @message = details_response.message
    render :action => 'error'
    return
  end
    
  @address = details_response.address
end

def confirm_quiz_AR
  redirect_to :action => 'cancel' unless params[:token]
  
  details_response = gateway.details_for(params[:token])
  
  if !details_response.success?
    @message = details_response.message
    render :action => 'error'
    return
  end
    
  @address = details_response.address
end

def confirm_test
  redirect_to :action => 'cancel' unless params[:token]
  
  details_response = gateway.details_for(params[:token])
  
  if !details_response.success?
    @message = details_response.message
    render :action => 'error'
    return
  end
    
  @address = details_response.address
end

def confirm_tutoring
  redirect_to :action => 'cancel' unless params[:token]
  
  details_response = gateway.details_for(params[:token])
  
  if !details_response.success?
    @message = details_response.message
    render :action => 'error'
    return
  end
    
  @address = details_response.address
end

def cancel
end

def complete_quiz_LR
  purchase = gateway.purchase(100,
    :ip       => request.remote_ip,
    :payer_id => params[:payer_id],
    :token    => params[:token]
  )
  
  if !purchase.success?
    @message = purchase.message
    render :action => 'error'
    return
  else 
    email_id = current_user.email
    ActiveRecord::Base.connection.execute %(UPDATE users SET quiz_credits = quiz_credits+1 WHERE email = "#{email_id}")
    @email = current_user.email
    details_response = gateway.details_for(params[:token])
    @address = details_response.address
    UserMailer.quiz_confirmation(@user, @email, @address).deliver 
    product = "LR_quiz"
    user_id = current_user.id
    ActiveRecord::Base.connection.execute %(INSERT INTO payments(product, user_id, created_at) VALUES("#{product}", "#{user_id}", CURDATE()))
  end
end

def complete_quiz_RC
  purchase = gateway.purchase(100,
    :ip       => request.remote_ip,
    :payer_id => params[:payer_id],
    :token    => params[:token]
  )
  
  if !purchase.success?
    @message = purchase.message
    render :action => 'error'
    return
  else 
    email_id = current_user.email
    ActiveRecord::Base.connection.execute %(UPDATE users SET quiz_credits = quiz_credits+1 WHERE email = "#{email_id}")
    @email = current_user.email
    details_response = gateway.details_for(params[:token])
    @address = details_response.address
    UserMailer.quiz_confirmation(@user, @email, @address).deliver 
    product = "RC_quiz"
    user_id = current_user.id
    ActiveRecord::Base.connection.execute %(INSERT INTO payments(product, user_id, created_at) VALUES("#{product}", "#{user_id}", CURDATE()))
  end
end

def complete_quiz_AR
  purchase = gateway.purchase(100,
    :ip       => request.remote_ip,
    :payer_id => params[:payer_id],
    :token    => params[:token]
  )
  
  if !purchase.success?
    @message = purchase.message
    render :action => 'error'
    return
  else 
    email_id = current_user.email
    ActiveRecord::Base.connection.execute %(UPDATE users SET quiz_credits = quiz_credits+1 WHERE email = "#{email_id}")
    @email = current_user.email
    details_response = gateway.details_for(params[:token])
    @address = details_response.address
    UserMailer.quiz_confirmation(@user, @email, @address).deliver 
    product = "AR_quiz"
    user_id = current_user.id
    ActiveRecord::Base.connection.execute %(INSERT INTO payments(product, user_id, created_at) VALUES("#{product}", "#{user_id}", CURDATE()))
  end
end

def complete_test
  purchase = gateway.purchase(1000,
    :ip       => request.remote_ip,
    :payer_id => params[:payer_id],
    :token    => params[:token]
  )
  
  if !purchase.success?
    @message = purchase.message
    render :action => 'error'
    return
  else 
    email_id = current_user.email
    #ActiveRecord::Base.connection.execute %(UPDATE schedules SET complete = 1 WHERE email = "#{email_id}")
    @email = current_user.email
    details_response = gateway.details_for(params[:token])
    @address = details_response.address
    UserMailer.test_confirmation(@user, @email, @address).deliver 
  end
end

def complete_tutoring
  purchase = gateway.purchase(7000,
    :ip       => request.remote_ip,
    :payer_id => params[:payer_id],
    :token    => params[:token]
  )
  
  if !purchase.success?
    @message = purchase.message
    render :action => 'error'
    return
  else 
    email_id = current_user.email
    ActiveRecord::Base.connection.execute %(UPDATE users SET tutoring_credits = tutoring_credits+1 WHERE email = "#{email_id}")
    redirect_to root_path, :flash => { :success => "Scheduling successful - email with payment and appointment details sent." }
    @user = current_user.username
    @email = current_user.email
    details_response = gateway.details_for(params[:token])
    @address = details_response.address
    @schedules = current_user.schedules
    UserMailer.tutoring_confirmation(@user, @email, @address, @schedules).deliver 
    product = "tutoring"
    user_id = current_user.id
    ActiveRecord::Base.connection.execute %(INSERT INTO payments(product, user_id, created_at) VALUES("#{product}", "#{user_id}", CURDATE()))
  end
end


private

def gateway
  @gateway ||= PaypalExpressGateway.new(
    :login => 'mleveton_api1.gmail.com',
    :password => '43S94MN6JJ8LGC2G',
    :signature => 'AFcWxV21C7fd0v3bYYYRCpSSRl31AfDnz.rNBkjKpzgnZa-IApGTjxT8'
  )
end

end


