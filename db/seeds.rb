# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

categories = Category.create([
  {:name => 'setting_interior', :height => 13, :width => 76},
  {:name => 'setting_city', :height => 13, :width => 76},
  {:name => 'setting_nature', :height => 13, :width => 76},
  {:name => 'setting_town', :height => 13, :width => 76},
  {:name => 'setting_random', :height => 12, :width => 76},
  
  {:name => 'monsters_slasher', :height => 12, :width => 84},
  {:name => 'monsters_vampire', :height => 12, :width => 84},
  {:name => 'monsters_zombie', :height => 14, :width => 84},
  {:name => 'monsters_ghost', :height => 12, :width => 84},
  {:name => 'monsters_other', :height => 12, :width => 84},
  {:name => 'monsters_none', :height => 12, :width => 84},
  {:name => 'monsters_random', :height => 12, :width => 84},
  
   {:name => 'weather_rain', :height => 14, :width => 97},
  {:name => 'weather_fog', :height => 12, :width => 97},
  {:name => 'weather_heat', :height => 14, :width => 97},
  {:name => 'weather_snow', :height => 14, :width => 97},
  {:name => 'weather_none', :height => 14, :width => 97},
  {:name => 'weather_random', :height => 15, :width => 97},
  
  {:name => 'creatures_land', :height => 14, :width => 79},
  {:name => 'creatures_water', :height => 14, :width => 80},
  {:name => 'creatures_air', :height => 14, :width => 80},
  {:name => 'creatures_none', :height => 14, :width => 80},
  {:name => 'creatures_random', :height => 14, :width => 80},
  
  {:name => 'blood_yes', :height => 14, :width => 75},
  {:name => 'blood_no', :height => 14, :width => 75},
  {:name => 'blood_random', :height => 13, :width => 75},
  
  {:name => 'victims_yes', :height => 14, :width => 70},
  {:name => 'victims_no', :height => 14, :width => 70},
  {:name => 'victims_random', :height => 13, :width => 70}])
