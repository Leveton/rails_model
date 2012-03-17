class Payment < ActiveRecord::Base
attr_accessible :product, :user_id

belongs_to :user


end
