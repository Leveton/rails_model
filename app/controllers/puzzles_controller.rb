class PuzzlesController < ApplicationController
before_filter :authenticate_user!, :except => [:tutorial, :home, :demo]
skip_before_filter :verify_authenticity_token, :only => [:deus_ex_machina_save]

def home
end

def index
  render :json => Puzzle.all
end

def show
end

def update
 puzzle = Puzzle.find(params[:id])
 puzzle.update_attributes! params
 render :json => puzzle
end

def destroy
  puzzle = Puzzle.find(params[:id])
  puzzle.destroy
  render :json => puzzle
end

def tutorial
    respond_to do |format|
      format.html
      format.js
      end
  end

  def demo
     @puzzles = Puzzle.create
  end

  def bete_noire
     @puzzles = Puzzle.create(params[:puzzles])
  end

  def enfant_terrible
    @puzzles = Puzzle.create(params[:puzzles])
  end

  def deus_ex_machina
    @puzzles = Puzzle.create(params[:puzzles])
   end


  def force_majeure
    @puzzles = Puzzle.create
  end

  def de_rigueur
    @puzzles = Puzzle.create
  end

  def ne_plus_ultra
    @puzzles = Puzzle.create
  end

  def wunderkind
  @puzzles = current_user.puzzles
  @titles = @puzzles.collect &:title
  end

  def game0
     @puzzles = Puzzle.create
  end

  def game1
      @puzzles = Puzzle.create
  end

  def game2
   if played_check('Quarterback1').empty?
     redirect_to quarterback_path, :flash => { :alert => "You must first unlock puzzle 1" }
   else
     @puzzles = Puzzle.create
   end
  end

  def game3
   if played_check('Quarterback2').empty?
     redirect_to quarterback_path, :flash => { :alert => "You must first unlock puzzle 2" }
   else
     @puzzles = Puzzle.create
   end
  end

  def game4
   if played_check('Quarterback3').empty?
     redirect_to quarterback_path, :flash => { :alert => "You must first unlock puzzle 3" }
   else
     @puzzles = Puzzle.create
   end
  end

  def game5
   if played_check('Quarterback4').empty?
     redirect_to quarterback_path, :flash => { :alert => "You must first unlock puzzle 4" }
   else
     @puzzles = Puzzle.create
   end
  end

  def quarterback_show
    if played_check('Quarterback5').empty?
           redirect_to quarterback_path, :flash => { :alert => "You must first unlock puzzles 1 - 5" }
    else
    end
end

  def enfant_terrible_show
    if played_check('Enfant Terrible').empty?
      redirect_to puzzle_path(current_user.id), :flash => { :alert => "You have not played that puzzle" }
    end
  end

   def bete_noire_show
    if played_check('Bete Noire').empty?
      redirect_to puzzle_path(current_user.id), :flash => { :alert => "You have not played that puzzle" }
    end
  end

   def deus_ex_machina_show
    if played_check('Deus Ex Machina').empty?
      redirect_to puzzle_path(current_user.id), :flash => { :alert => "You have not played that puzzle" }
    end
  end

  def create
    puzzle = Puzzle.create! params
    render :json => puzzle
  end

  private

  def user
    current_user.id
  end

  def played_check(title)
    Puzzle.where(:title => title, :user_id => "#{user}")
  end

  def badgeWon(a)
    case a
    when "speedTest1"
      return "Bete Noire"
    when "enfant-terrible"
      return "Enfant Terrible"
    when "deus_ex_machina1"
      return nil
    when "deus_ex_machina2"
      return "Deus ex Machina"
    else
      return "badge"
    end
  end

  def redirectUser(a)
    case a
    when "speedTest1"
      return sandbox_path
    when "enfant-terrible"
      return sandbox_path
    when "deus_ex_machina1"
      return deus_ex_rompecabezas_path
    when "deus_ex_machina2"
      return sandbox_path
    else
      return sandbox_path
    end
  end
end
