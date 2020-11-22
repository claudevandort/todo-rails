Rails.application.routes.draw do
  root 'pages#index'
  resources :items, only: [:index, :create]
end
