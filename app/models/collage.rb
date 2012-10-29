class Collage < ActiveRecord::Base

  has_and_belongs_to_many :categories
  has_and_belongs_to_many :videos
  
  attr_accessor :category_list
  after_save :generate_collage
  after_initialize :init

    def init
      self.title  ||= 'Untitled'
    end
    
  private
  
  def generate_collage
    categories.delete_all
    selected_categories = category_list.nil? ? [] : category_list.keys.collect{|id| Category.find_by_id(id)}
    selected_categories.each do |category| 
      if videos.length < 20  #add the missing videos to get to 20
        missing_videos = 20 - videos.length  
        self.categories << category
        videos << Video.joins(:categories).where({:categories => {:id => category}}).limit(missing_videos)
      end
    end 
  end
  
end
