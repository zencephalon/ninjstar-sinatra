get '/demo' do
  sleep rand(5)
  if rand(5) > 3
    "hello world"
  else
    500
  end
end

get '/demo2' do
  sleep rand(5)
  if rand(5) > 3
    "ILUVU"
  else
    500
  end
end

get '/demo3' do
  sleep rand(5)
  if rand(5) > 3
    "goodbye"
  else
    500
  end
end

get '/hello' do
 erb :welcome
end