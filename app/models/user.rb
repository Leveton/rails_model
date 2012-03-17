class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :lockable, :token_authenticatable, :omniauthable



  attr_accessible :username, :email, :password, :password_confirmation, :remember_me

  has_many :appointments
  has_many :puzzles
  has_many :assessments
  has_many :payments

  validates_presence_of :username
  validates_uniqueness_of :username, :case_sensitive => false


def self.find_for_facebook_oauth(access_token, signed_in_resource=nil)
  data = access_token.extra.raw_info
  if user = User.where(:email => data.email).first
    user
  else
    User.create!(:username => data.name, :email => data.email, :password => Devise.friendly_token[0,20])
  end
end

def self.find_for_open_id(access_token, signed_in_resource=nil)
  data = access_token.info
  if user = User.where(:email => data["email"]).first
    user
  else
    full_email = data["email"]
    half_email = full_email.split( '@' )
    User.create!(:username => half_email[0], :email => data["email"], :password => Devise.friendly_token[0,20])
    #guser.skip_confirmation!
    #guser.create
  end
end

 def puzzle_check(puzzle_title)
    if Puzzle.where(:user_id => self.id, :title => puzzle_title).empty?
     0
    else
     1
  end
end

 def get_puzzle_times(title, user_index)
    latency_convert=Puzzle.find_by_user_id_and_title(self.id, title)
    latency = latency_convert.latency
    latency_split = latency.split('-')
    latency_split.slice!(0..3)
    latency_split[user_index]
end

def get_puzzle_attempts(title, user_index)
  attempt_array = Puzzle.find_by_user_id_and_title(self.id, title)
  attempt = attempt_array.attempts
  attempt_split = attempt.split('-')
  attempt_split.slice!(0..3)
  attempt_split[user_index]
end

def get_puzzle_resets(title, user_index)
  reset_array = Puzzle.find_by_user_id_and_title(self.id, title)
  reset = reset_array.resets
  reset_split = reset.split('-')
  reset_split.slice!(0..3)
  reset_split[user_index]
end

def saved_check(title)
   Puzzle.where(:user_id => self.id, :title => title)
   #@titles
end


end
