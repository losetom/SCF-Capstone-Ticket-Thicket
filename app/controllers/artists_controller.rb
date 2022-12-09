class ArtistsController < ApplicationController
    def index
        render json: Artist.all
    end
end
