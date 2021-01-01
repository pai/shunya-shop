import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@sevenport.io',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Galt',
    email: 'john@sevenport.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Galt',
    email: 'jane@sevenport.io',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
