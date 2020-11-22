class PagesController < ApplicationController
  def index
  end

  def items
    @items = List.first.items

    render json: {items: @items}
  end
end
