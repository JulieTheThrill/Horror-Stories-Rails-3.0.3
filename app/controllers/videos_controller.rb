class VideosController < ApplicationController
  before_filter :login_required, :only=>['edit', 'update', 'destroy']
    
    require 'csv'
    
  def import
    Video.delete_all
    @cats = [0,0,1,2,3,4,6,7,8,9,10,11,13,14,15,16,17,19,20,21,22,24,25,27,28]
    puts 'HEEELLLLOOOOO'
    CSV.foreach("#{Rails.root}/public/csvfile.csv") do |row|
      @video = Video.create(:title => row[0])
      puts @video.title
      23.times do |i|
        if (row[i] == 'x' or row[i] == 'X')
            puts Category.find_by_id(@cats[i]).inspect
            @video.categories << Category.find_by_id(@cats[i])
        end
      end
    end
    @videos = Video.all
  end
  
  
  # GET /videos
  # GET /videos.json
  def index
    @videos = Video.find(:all, :order => "created_at desc")

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @videos }
    end
  end

  # GET /videos/1
  # GET /videos/1.json
  def show
    get_all_categories
    @video = Video.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @video }
    end
  end

  # GET /videos/new
  # GET /videos/new.json
  def new
    get_categories
    @video = Video.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @video }
    end
  end
  
  # GET /videos/1/edit
  def edit
    get_all_categories
    @video = Video.find(params[:id])
  end

  # POST /videos
  # POST /videos.json
  def create
    @video = Video.new(params[:video])

    respond_to do |format|
      if @video.save
         format.html { render :action => "success" }
      else
        format.html { render :action => "fail" }
      end
    end
  end

  # PUT /videos/1
  # PUT /videos/1.json
  def update
    @video = Video.find(params[:id])

    respond_to do |format|
      if @video.update_attributes(params[:video])
      format.html { redirect_to :controller => "user", :action => "welcome" }
      flash[:message]="Video was successfully updated"
        format.json { head :ok }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @video.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /videos/1
  # DELETE /videos/1.json
  def destroy
    @video = Video.find(params[:id])
    @video.destroy

    respond_to do |format|
      format.html { redirect_to :controller => "user", :action => "welcome" }
      flash[:message]="Video was successfully deleted"
      format.json { head :ok }
    end
  end
  
  def get_all_categories
    @categories = Category.find(:all, :order => "name desc")

  end
  
  def get_categories
    @categories = Category.find(:all)
  end
  
  def collage
  end
  
  def success
  end
  
  def fail
  end
    
end
