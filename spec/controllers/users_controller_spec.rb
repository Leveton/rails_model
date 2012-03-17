require 'spec_helper'

describe UsersController do
  login_user

  it "should have a current_user" do
    subject.current_user.should_not be_nil
  end

  it "should get index" do
    get 'index'
    response.should be_success
  end

  it "should have a puzzle_title array" do
  get users_show_path
  @total_puzzles.should include('Deus Ex Machina')
end

  describe "GET 'about page'" do
    it "should be successful" do
      get :about
      response.should be_success
    end


    it "about page should have a non-blank body" do
        get 'about'
        response.body.should_not =~ /<body>\s*<\/body>/
      end
    end
end
