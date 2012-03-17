class Assessment < ActiveRecord::Base
attr_accessible :user_id, :section, :title, :difficulty

belongs_to :user

#validates :user_id, :presence => true

#default_scope :order => 'assessments.created_at DESC'

#scope :from_users_followed_by, lambda { |user| followed_by(user) }

 end
