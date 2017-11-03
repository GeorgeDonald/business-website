require 'sinatra'
require 'sinatra/reloader'
require 'Nokogiri'

get '/' do
  erb :index
end
