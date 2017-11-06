require 'sinatra'
require 'sinatra/reloader'
require 'Nokogiri'
require 'sendgrid-ruby'
require 'pry'
#require 'mail'
include SendGrid


get '/' do
  erb :index
end

get '/products' do
  erb :products
end

get '/contact' do
  erb :contact
end

post '/contact' do
  erb :contact
end

get '/edit' do
  erb :edit
end

post '/edit' do
  erb :edit
end
