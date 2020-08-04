require 'pry'

class BankAccount
  attr_accessor :balance
  attr_reader :account_number
  
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