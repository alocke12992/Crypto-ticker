1.times do
  User.create(
    email: 'test@test.com',
    password: 'password'
  )
  end