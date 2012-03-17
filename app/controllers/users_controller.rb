class UsersController < ApplicationController
before_filter :authenticate_user!


def show
  @puzzles = current_user.puzzles
  @titles = @puzzles.collect {|i| i.title}
  @total_puzzles = ["Enfant Terrible", "Bete Noire", "Deus Ex Machina", "Quarterback1", "Quarterback2", "Quarterback3", "Quarterback4", "Quarterback5"]
  @incomplete_puzzles = @total_puzzles - @titles

  @assessments = current_user.assessments
  @atitles = @assessments.collect {|i| i.title}
  @total_assessments = ["preptest61 medium quiz", "preptest61 easier quiz", "preptest61 harder quiz"]
  @incomplete_assessments = @total_assessments - @atitles
end

def help
end

def home
end
def times
end
def index
end

end
