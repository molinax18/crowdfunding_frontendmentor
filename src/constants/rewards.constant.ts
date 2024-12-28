import { Reward } from '../interface/reward.interface';

export const REWARDS = [
  {
    name: "Bamboo Stand",
    pledge: 25,
    description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    amount: 101
  },
  {
    name: "Black Edition Stand",
    pledge: 75,
    description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: 64
  },
  {
    name: "Mahogany Special Edition",
    pledge: 200,
    description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: 0
  }
] as Reward[]