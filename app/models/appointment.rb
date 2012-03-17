class Appointment < ActiveRecord::Base
attr_accessible :user_id, :date, :hour, :location, :tutoring_type, :phone_number, :open

belongs_to :user

phone_number_regex = /^[0-9]+(-[0-9]+)*$/

validates :date,  :presence => true
validates :hour,  :presence => true,
                  :uniqueness => {:scope => :date}
validates :tutoring_type, :presence => true
validates :phone_number, :presence   => true,
                         :format     => { :with => phone_number_regex }

end
