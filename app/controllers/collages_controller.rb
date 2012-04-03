class CollagesController < ApplicationController
  
  
  # GET /collages
  # GET /collages.json
  def index
    @collages = Collage.order("created_at DESC").all
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @collages }
    end
  end

  # GET /collages/1
  # GET /collages/1.json
  def show
    @collage = Collage.find(params[:id])
    get_all_categories

    respond_to do |format|
      format.html # show.html.erb
      format.json { render CustomSound @collage }
    end
  end

  # GET /collages/new
  # GET /collages/new.json
  def new
    @collage = Collage.new
    get_all_categories
    
    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @collage }
    end
  end

  # GET /collages/1/edit
  def edit
    @collage = Collage.find(params[:id])
  end

  # POST /collages
  # POST /collages.json
  def create
    @collage = Collage.new(params[:collage])
    

    respond_to do |format|
      if @collage.save
        format.html { redirect_to @collage, :notice => 'Collage was successfully created.' }
        format.js
      else
        format.html { render :action => "new" }
        format.js
      end
    end
  end

  # PUT /collages/1
  # PUT /collages/1.json
  def update
    @collage = Collage.find(params[:id])

    respond_to do |format|
      if @collage.update_attributes(params[:collage])
        format.html { redirect_to @collage, :notice => 'Collage was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @collage.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /collages/1
  # DELETE /collages/1.json
  def destroy
    @collage = Collage.find(params[:id])
    @collage.destroy

    respond_to do |format|
      format.html { redirect_to collages_url }
      format.json { head :ok }
    end
  end
  
  def share
  end
  
  def get_all_categories
      @categories = Category.find(:all)
   end  
  
end
