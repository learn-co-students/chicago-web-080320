class AppearancesController < ApplicationController
    def new
        @appearance = Appearance.new
        @guests = Guest.all
        @episodes = Episode.all
    end 

    def create
        appearance = Appearance.create(appearance_params)
        if appearance.save
            flash[:success] = "Appearance Successfully Created. YAY!"
            redirect_to episode_path(appearance.episode)
        else
            flash[:errors] = appearance.errors.full_messages
            redirect_to new_appearance_path
        end 
    end

    private 

    def appearance_params
        params.require(:appearance).permit(:guest_id, :episode_id, :rating)
    end
end
