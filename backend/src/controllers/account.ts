import  { Request, Response} from 'express'
import mongoose from 'mongoose'
import logging from '../config/logging'
import Account from '../models/account'

const NAMESPACE = 'Account Controller'

const saveToAccount = (req: Request, res: Response ) => {
  try {
    
    let { action, state } = req.body
    // if account does not exist by, create a new one
    Account.findOne({account: action})
    .then(account => {
      if (account) {
        account.amount = state
        console.log('account exists', account)
        account.save()
        .then((account) => {
          res.status(201).json(account)
        })
      } else {
        Account.create({account: action, amount: state})
        .then(account => {
          console.log('account doesnt exist', account)
          res.status(201).json(account)
        })
      }
    })


  } catch (error) {
    throw error
  } 
}

const fetchFromAccount = (req: Request, res: Response ) => {
  console.log(req.params.name)
  try {
    Account.findOne({ account: req.params.name})
    .then(account => {
      if (account) {
        console.log('account found', account)
        res.status(201).json({message: "Account found", account})
      } else {
        console.log('no account found')
        res.status(200).json({message: "No account found"})
      }
    })

  } catch (error) {
    throw error
  }
}

const DeleteAccount = (req: Request, res: Response ) => {
  try {
    Account.findOneAndRemove({ account: req.params.name})
    .then(account => {
      console.log('delete this account', account)
      res.status(200).json(account)
    })
  } catch (error) {
    throw error
  } 
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  saveToAccount,
  fetchFromAccount,
  DeleteAccount
}