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
    all_videos = Array.new
    selected_categories.each {
      |category| 
        self.categories << category
        all_videos << category.videos
      }
    if all_videos.length < 20  #add the missing videos to get to 20
      missing_videos = 20 - all_videos.length 
      all_videos << Video.find(:all, :limit => missing_videos)
    end 
    videos << all_videos
  end
  
end
