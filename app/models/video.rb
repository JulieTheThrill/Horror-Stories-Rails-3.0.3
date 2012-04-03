class Video < ActiveRecord::Base

validates :title, :presence=>true

has_and_belongs_to_many :categories
has_and_belongs_to_many :collages

  attr_accessor :category_list
  after_save :update_categories
  

  private 

  def update_categories
    categories.delete_all
    selected_categories = category_list.nil? ? [] : category_list.keys.collect{|id| Category.find_by_id(id)}
    selected_categories.each {|category| self.categories << category}
  end

end

