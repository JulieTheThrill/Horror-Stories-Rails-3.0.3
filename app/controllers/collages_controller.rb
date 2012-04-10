class CollagesController < ApplicationController
  before_filter :login_required, :only=>['edit', 'update', 'destroy']
  
  
    require 'net/http'
  
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
    @collage = Collage.find(params[:id])

    @collageid = params[:id]   
    respond_to do |format|
      if true
        format.html { render :action => "share"}
      else
        @collageid = @collage.id
        format.html { render :action => "fail"}    
      end
      
    end
  end
  
  def share_again
    
    @message = params[:message]
    @name = params[:from_name][:from_name]
    @to = params[:to_email][:to_address]
    @from = params[:from_email][:from_address]
    
    @message.gsub!(/\s+/, "+")
    @name.gsub!(/\s+/, "+")
    @to.gsub!(/\s+/, "+")
    @from.gsub!(/\s+/, "+")
    
    @result = Net::HTTP.get_response(URI.parse("http://horrorstories.jillianmcdonald.net/mailer.php?id="+ params[:collageid] + "&name="+ @name + "&to=" + @to + "&sender=" + @from + "&message=" + @message + "&token=4293956881340038755")).body
   
    @collageid = params[:collageid]  
    
    
     respond_to do |format|
      if @result.eql?("1")
        format.html { render :action => "success"}
      else
        format.html { render :action => "fail"}    
      end
      end
  end
    
  def get_all_categories
      @categories = Category.find(:all)
   end  
   
   def success
     
   end
   
   def fail
     
   end
  
end
