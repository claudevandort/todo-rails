Rails.application.routes.draw do
  root 'pages#index'
  get 'items', to: 'pages#items'
end
