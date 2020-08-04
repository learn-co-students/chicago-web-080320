require 'pry'


class BankAccount

  attr_accessor(:balance)
  # attr_reader :account_number

  # class variable
  # class variables are available to class methods, as well as instance methods
  @@all = []
  
  def initialize(account_number)
    @account_number = account_number
    @balance = 1000

    @@all << self
  end

  # class method!
  def self.all
    @@all
  end

  # self in a class method is the class itself!
  def self.find_by_account_number(account_number)
    # array of bank accounts
    found_bank_account = self.all.find do |bank_account_instance|
      # condition to return true when we find the instance we're looking for
      account_number == bank_account_instance.account_number
    end
    binding.pry
    # string of account number

    # find / detect
    # map / collect
    # select / find_all
    # binding.pry
  end



  def account_number
    "IansBank-#{@account_number}"
  end

  # instance method!
  def print_balance
    # account_number = "123"
    # self in an instance method is whatever instance we called the method on
    puts "The account #{self.account_number} has a balance of $ #{self.balance}"

    # this version uses "implicit" self
    # puts "The account #{account_number} has a balance of $ #{balance}"
  end

end # end of BankAccount class



# BankAccount.new => returns a new instance of a BankAccount
# all_bank_accounts = []

b1 = BankAccount.new("123")
# all_bank_accounts << b1

b2 = BankAccount.new("321")
# all_bank_accounts << b2

binding.pry
0