class CampersController < ApplicationController
  def index
    @campers = Camper.all
  end

  def show
    @camper = Camper.find(params[:id])
  end

  def new
    @camper = Camper.new
  end

  def create
    camper = Camper.new(camper_params)
    if camper.save
      flash[:success] = "New Camper Succesfully Created!"
      redirect_to camper_path(camper)
    else
      flash[:errors] = camper.errors.full_messages
      redirect_to new_camper_path
    end
  end

  private

  def camper_params
    params.require(:camper).permit(:name, :age)
  end

end
