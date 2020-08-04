require 'pry'

# bank_account = { account_number: 12345, balance: 100 }
class BankAccount
  # Getter + Setter
  attr_accessor :balance, :account_number
  
  # calling BankAccount.new will call initialize for us
  # initialize is an instance method that will create the new Ruby instance with some initial data
  def initialize(account_number)
    @account_number = account_number
    @balance = 0
  end


end # end of BankAccount class



# BankAccount.new => returns a new instance of a BankAccount
b1 = BankAccount.new("123")

b2 = BankAccount.new("321")

binding.pry
0