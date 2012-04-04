ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "jillianmcdonald.net",
  :user_name            => "jillianmcdonald",
  :password             => "Winnipeg1",
  :authentication       => "plain",
  :enable_starttls_auto => true
}