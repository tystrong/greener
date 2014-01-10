require 'test_helper'

class SolutionsControllerTest < ActionController::TestCase
  test "should get solar" do
    get :solar
    assert_response :success
  end

  test "should get wind" do
    get :wind
    assert_response :success
  end

  test "should get geothermal" do
    get :geothermal
    assert_response :success
  end

  test "should get biofuel" do
    get :biofuel
    assert_response :success
  end

  test "should get index" do
    get :index
    assert_response :success
  end

end
