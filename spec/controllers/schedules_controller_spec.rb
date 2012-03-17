require 'spec_helper'

describe SchedulesController do
  render_views
  include Devise::TestHelpers

before (:each) do
    @user = FactoryGirl.create(:user)
    sign_in @user
end
  describe "GET 'bychat'" do
    it "should be successful" do
      get 'bychat'
      response.should be_success
    end
  end

describe "GET 'byphone'" do
    it "should be successful" do
      get 'byphone'
      response.should be_success
    end
  end

describe "GET 'oneonone_temp'" do
    it "should be successful" do
      get 'oneonone_temp'
      response.should be_success
    end
  end

describe "GET 'oneonone'" do
    it "should be successful" do
      get 'oneonone'
      response.should redirect_to(tutoring_oneonone_temp_path)
    end
  end

describe Schedule do
  before(:each) do
    @schedule = Schedule.new(:hour => "08.30.00")
  end

  it 'should have an hour attribute' do
    @schedule.hour.should == "08.30.00"
   end
end
end
