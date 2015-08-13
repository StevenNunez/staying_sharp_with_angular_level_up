require 'sinatra'
require 'json'
class App < Sinatra::Base
  get '/users' do
    [{name: "Steven Nunez", username: "GeneralissimoFelipeDeLaCosta"}].to_json
  end

  get '/notes' do
    [{title: "I'm a title", body: "So bodacious", author: "Franco"}].to_json
  end

  get '/notes/:id' do
    {title: "I'm a title", body: "So bodacious", author: "Franco"}.to_json
  end

  get '/' do
    erb :index
  end
end

run App
