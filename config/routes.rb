Rails.application.routes.draw do
  root 'pages#index'
  resources :items, only: [:index, :create, :update, :destroy]
end
