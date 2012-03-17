class Puzzle < ActiveRecord::Base

attr_accessible :title, :latency, :attempts, :resets, :done, :user_id
belongs_to :user

validates :title, :presence => true,
                  :length => { :maximum => 140 }

  def to_json(options = {})
    super(options.merge(:only => [ :id, :user_id, :title, :latency, :attempts, :resets, :done ]))
  end



end
