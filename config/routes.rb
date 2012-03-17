Prepcloud::Application.routes.draw do


 devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
 devise_for :admins
 
 devise_scope :users do
   get '/users/auth/:provider' => 'users/omniauth_callbacks#passthru'
   #match "/oauth_temp" => 'pages#temp'
 end

devise_scope :user do
      get "/logout" => "devise/sessions#destroy"
end

  resources :puzzles
  resources :users
  resources :pages
  resources :assessments
  resources :payments
  resources :pages
  resources :appointments
 

  resources :users do
    resources :payments
  end

  root :to => "puzzles#home"
  match '/privacy',    :to => 'pages#privacy'
  match '/legal',    :to => 'pages#legal'
  match '/pricing',    :to => 'pages#pricing'
  match '/coming_soon', :to => 'pages#coming_soon' 
  
  match '/demo' => 'puzzles#demo'
  match '/game1' => 'puzzles#game1'
  match '/game2' => 'puzzles#game2'
  match '/game3' => 'puzzles#game3'
  match '/game4' => 'puzzles#game4'
  match '/game5' => 'puzzles#game5'
  match '/demo_show' => 'puzzles#demo_show'
  match '/puzzle2_show' => 'puzzles#bete_noire_show'
  match '/puzzle1_show' => 'puzzles#enfant_terrible_show'
  match '/puzzle3_show' => 'puzzles#deus_ex_machina_show'
  match '/quarterback_show' => 'puzzles#quarterback_show'
  match '/ne_plus_ultra' => 'puzzles#ne_plus_ultra'
  match '/badges' => 'puzzles#badges'

  match '/puzzle1' => 'puzzles#enfant_terrible'
  match '/puzzle2' => 'puzzles#bete_noire'
  match '/puzzle3' => 'puzzles#deus_ex_machina'
  match '/quarterback' => 'puzzles#quarterback'
  match '/tutorial' => 'puzzles#tutorial'
  match '/wunderkind' => 'puzzles#wunderkind'
  match '/sitemap' => 'users#sitemap'
  match '/about' => 'users#about'
  match '/help' => 'users#help'
  match '/stats' => 'users#stats'

  match '/internalreport', :to => 'captivate_results#process_results'

  match '/tutoring',    :to => 'appointments#tutoring'
  match '/tutoring/byphone',    :to => 'appointments#byphone'
  match '/tutoring/oneonone',    :to => 'appointments#oneonone'
  match '/tutoring/oneonone_temp',    :to => 'appointments#oneonone_temp'
  match '/temp',    :to => 'appointments#temp'
  match '/tutoring/match_dates',  :to => 'appointments#match_dates'

  match '/official_questions' => 'assessments#official_questions'
  match '/logical_reasoning' => 'assessments#logical_reasoning'
  match '/reading_comprehension' => 'assessments#reading_comprehension'
  match '/logic_games' => 'assessments#logic_games'
  match '/preptest61_easier_quiz', :to => 'assessments#preptest61_easier_quiz'
  match '/preptest61_medium_quiz', :to => 'assessments#preptest61_medium_quiz'
  match '/preptest61_harder_quiz', :to => 'assessments#preptest61_harder_quiz'
  match '/preptest61_easier_quiz_show', :to => 'assessments#preptest61_easier_quiz_show'
  match '/preptest61_medium_quiz_show', :to => 'assessments#preptest61_medium_quiz_show'
  match '/preptest61_harder_quiz_show', :to => 'assessments#preptest61_harder_quiz_show'
  match '/games_quiz1', :to => 'assessments#games_quiz_show'
  match '/reading_quiz1', :to => 'assessments#reading_quiz_show'
  match '/pt61easy1', :to => 'assessments#pt61easy1'
  match '/preptest61_reading_quiz1', :to => 'assessments#preptest61_reading_quiz1'
  match '/pt61_games_quiz1', :to => 'assessments#pt61_games_quiz1'
  match '/prepTest61_medium_quiz.swf', :to => 'assessments#admin_block'
  
  match '/PrepTest61_easier_quiz_show', :to => 'questions#PrepTest61_easier_quiz_show'
  match '/PrepTest61_medium_quiz_show', :to => 'questions#PrepTest61_medium_quiz_show'
  match '/PrepTest61_harder_quiz_show', :to => 'questions#PrepTest61_harder_quiz_show'
  match '/pt61_games_quiz1_show', :to => 'questions#pt61_games_quiz1_show'
  match '/preptest61_reading_quiz1_show', :to => 'questions#preptest61_reading_quiz1_show'
  
  match '/prepTest61_medium_quiz.swf', :to => 'assessments#admin_block'
  match '/prepTest61_easier_quiz.swf', :to => 'assessments#admin_block'
  match '/prepTest61_harder_quiz.swf', :to => 'assessments#admin_block'
  match '/pt61_games_quiz1.swf', :to => 'assessments#admin_block'
  match '/preptest61_reading_quiz1.swf', :to => 'assessments#admin_block'

  match '/pt61_easier_buy',    :to => 'payments#pt61_easier_buy'
  match '/pt61_medium_buy',    :to => 'payments#pt61_medium_buy'
  match '/pt61_harder_buy',    :to => 'payments#pt61_harder_buy'
  match '/pt61_reading_quiz_buy',    :to => 'payments#pt61_reading_quiz_buy'
  match '/pt61_games_quiz_buy',    :to => 'payments#pt61_games_quiz_buy'
  match '/tutoring_buy',    :to => 'payments#tutoring_buy'
  match '/checkout_quiz_LR',    :to => 'payments#checkout_quiz_LR'
  match '/checkout_quiz_RC',    :to => 'payments#checkout_quiz_RC'
  match '/checkout_quiz_AR',    :to => 'payments#checkout_quiz_AR'
  match '/checkout_test',    :to => 'payments#checkout_test'
  match '/checkout_tutoring',    :to => 'payments#checkout_tutoring'
  match '/confirm_quiz_LR',    :to => 'payments#confirm_quiz_LR'
  match '/confirm_quiz_RC',    :to => 'payments#confirm_quiz_RC'
  match '/confirm_quiz_AR',    :to => 'payments#confirm_quiz_AR'
  match '/confirm_test',    :to => 'payments#confirm_test'
  match '/confirm_tutoring',    :to => 'payments#confirm_tutoring'
  match '/complete_quiz_LR',    :to => 'payments#complete_quiz_LR'
  match '/complete_quiz_RC',    :to => 'payments#complete_quiz_RC'
  match '/complete_quiz_AR',    :to => 'payments#complete_quiz_AR'
  match '/complete_test',    :to => 'payments#complete_test'
  match '/complete_tutoring',    :to => 'payments#complete_tutoring'
  match '/cancel',    :to => 'payments#cancel'
  match '/error',    :to => 'payments#error'

end
