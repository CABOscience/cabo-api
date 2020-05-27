'use strict'

import bcrypt from 'bcrypt'
import _ from 'lodash'
import { DataTypes } from 'sequelize'

export default function (db) {
  const Users = db.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'uq_member_name',
      comment: "Nom de l'utilisateur"
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'uq_member_name',
      comment: "Prénom de l'utilisateur"
    },
    email: {
      type: DataTypes.STRING,
      comment: "Adresse courriel de l'utilisateur",
      unique: 'uq_memb_email',
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'], // TODO add more values
      defaultValue: 'user',
      comment: "role de l'utilisateur",
      allowNull: false
    },
    organization: {
      type: DataTypes.STRING,
      comment: "Organisme d'attache de l'utilisateur"
    },
    password: {
      type: DataTypes.STRING,
      comment: "Mot de passe de l'utilisateur",
      allowNull: false
    }
  }, {
    underscored: true,
    freezeTableName: true
  })

  // Instance Methods
  Users.prototype.authenticate = function (value) {
    return bcrypt.compareSync(value, this.password)
  }

  db.Users = Users
}
