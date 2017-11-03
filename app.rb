require 'sinatra'
require 'sinatra/reloader'
require 'Nokogiri'

get '/' do
  erb :index
end

get '/products' do
  erb :products
end

get '/contact' do
  erb :contact
end

get '/edit' do
  erb :edit
end
