Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #Login/Register
  post "/login", to: "sessions#create"
  post "/register", to: "users#register"

  #Staying logged in
  get "/me", to: "users#show"

  #LogOut
  delete "/logout", to: "sessions#destroy"
end
