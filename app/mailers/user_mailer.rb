class UserMailer < ActionMailer::Base
 
 default :from => 'horror@jillianmcdonald.net'
 default :name => 'Horror Enthusiast'
 default :message => 'Hey there friend! Check this out!'
 default 
 
  
  def share_collage(name, from, to, message)
    @url = 'horrorstories.jillianmcdonald.net/collages/show/3' 
    @name = name
    @message = message
      mail(:to => 'julielgill@gmail.com', :subject => 'scary video')
    
  end
  
end
