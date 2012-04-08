class UserMailer < ActionMailer::Base
 
 default :from => 'horror@jillianmcdonald.net'
  
  def share_collage(email)
    mail(:to => email, :subject => 'scary video')
  end
  
end
