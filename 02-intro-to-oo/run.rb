require 'pry'

# bank_account = { account_number: 12345, balance: 100 }
class BankAccount
  # Getter + Setter
  attr_accessor :balance, :account_number
  # def balance
  #   @balance
  # end

  # instance method that will create the new Ruby instance with some initial data
  def initialize(account_number)
    @account_number = account_number
    @balance = 0
  end

  # Getter method
  # attr_reader :balance, :account_number
  # def balance
  #   @balance
  # end

  # Setter method
  # attr_writer :balance, :account_number
  # def balance=(value)
  #   @balance = value
  # end

  # instance method => method I can call on ANY instance of this class
  # Getter method
  # def account_number
  #   @my_account_number
  # end

  # # Setter method
  # def account_number=(value)
  #   # @my_account_number => instance variable! share the same data between methods for an instance
  #   # instance variables can only be used by other instance methods within the class
  #   @my_account_number = value
  # end

end # end of BankAccount class



# BankAccount.new => return a new instance of a BankAccount
b1 = BankAccount.new("123")
# b1.account_number = "123"
# b1.balance = 1000

b2 = BankAccount.new("321")
# b2.account_number = "321"
# b2.balance = 2000

binding.pry
0