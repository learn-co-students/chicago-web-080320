class EmployeesController < ApplicationController

  def index
    @employees = Employee.all
  end

  def show
    @employee = Employee.find(params[:id])
  end

  def new
    @employee = Employee.new
    @dogs = Dog.all
  end

  def create
    employee = Employee.create(employee_params)
    if employee.save
      redirect_to employee_path(employee)
    else
      flash[:errors] = employee.errors.full_messages
      flash[:first_name] =  employee.first_name
      flash[:last_name] =  employee.last_name
      flash[:alias] =  employee.alias
      flash[:title] =  employee.title
      flash[:office] =  employee.office
      flash[:img_url] =  employee.img_url
      flash[:dog_id] =  employee.dog_id
      redirect_to new_employee_path
    end
  end

  private

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :alias, :office, :title, :img_url, :dog_id)
  end

end
