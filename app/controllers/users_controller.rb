class UsersController < ApplicationController
  def show
  	@usrer = User.find(params[:id])
  end
end
