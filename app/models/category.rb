class Category < ActiveRecord::Base

has_and_belongs_to_many :collages
has_and_belongs_to_many :videos

def display_name 
  "#{name}"
end

end
