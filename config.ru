require 'sinatra'
require 'json'
class App < Sinatra::Base
  get '/users' do
    [{name: "Steven Nunez", username: "GeneralissimoFelipeDeLaCosta"}].to_json
  end

  get '/notes' do
    [
      {title: "I'm a title", body: "So bodacious", author: "Franco"},
      {title: "Microsoft is cool", body: "Seriously, stop laughing", author: "Hessvacio"},
      {title: "Do push ups", body: "This message brought to you by ClassPass", author: "Jahde"},

    ].to_json
  end

  get '/notes/:id' do
    {title: "I'm a title", body: "So bodacious", author: "Franco"}.to_json
  end

  get '/' do
    erb :index
  end
end

run App
