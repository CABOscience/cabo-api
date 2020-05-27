'use strict'

// TODO ?

export default function (epilogue, db, resources) {
  const usersResource = epilogue.resource({
    model: db.Users,
    endpoints: ['users/', 'users/:id']
  })

  // Remove user's password from the api calls
  usersResource.list.fetch.after((req, res, context) => {
    context.instance.forEach((user) => {
      delete user.dataValues.password
    })

    return context.continue
  })
  usersResource.read.fetch.after((req, res, context) => {
    delete context.instance.dataValues.password
    return context.continue
  })

  resources.usersResource = usersResource
}
