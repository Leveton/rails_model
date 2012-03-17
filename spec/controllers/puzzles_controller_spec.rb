require 'spec_helper'

describe PuzzlesController do
  render_views
  login_user

  describe "GET 'tutorial'" do
    it "should be successful" do
      get :tutorial
      response.should be_success
    end
  end

describe "GET 'game1'" do
    it "should be successful" do
      get :game1
      response.should be_success
    end
  end

describe "GET 'game2'" do
    it "should not be successful" do
      get :game2
      response.should_not be_success
    end
  end

describe "GET 'game3'" do
    it "should not be successful" do
      get :game3
      response.should_not be_success
    end
  end

describe Puzzle do
  before(:each) do
    @puzzle = Puzzle.new(:title => "Deus Ex Machina")
  end

  it 'should have a title attribute' do
    @puzzle.title.should == "Deus Ex Machina"
   end
end
end
