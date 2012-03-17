require 'spec_helper'

describe "Users" do

describe "signin" do

    describe "failure" do
      it "should not sign a user in" do
        visit new_user_session_path
        fill_in "email",    :with => ""
        fill_in "password", :with => ""
        click_link("Sign in#{@div.btn}")
        response.should have_selector('div.flash.alert',
                                      :content => "Invalid")
        response.should render_template('devise/sessions/new')
      end
    end

    describe "success" do
      it "should sign a user in and out" do
        visit new_user_session_path
        fill_in "Email",    :with => "example@railstutorial.org"
        fill_in "Password", :with => 'password'
        click_button
        controller.should be_signed_in

      end
    end
  end
end
