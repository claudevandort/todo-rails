class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_list, only: [:index, :create]
  before_action :set_items, only: [:index]
  before_action :set_item, only: [:update]
  def index
    render json: {items: @items}
  end

  def create
    item = Item.new(item_params)
    item.list_id = @list.id
    if item.save
      head :ok
    else
      head :bad_request
    end
  end

  def update
    if @item.update(item_params)
      head :ok
    else
      head :bad_request
    end
  end

  def destroy
    item = Item.find params[:id]
    if item.present?
      if item.destroy
        head :ok
      else
        head :internal_server_error
      end
    else
      head :not_found
    end
  end

  def set_items
    @items = @list.items
  end

  def set_item
    @item = Item.find params[:id]
  end

  def set_list
    @list = List.first
  end

  def item_params
    params.require(:item).permit(:id, :text, :done)
  end
end
