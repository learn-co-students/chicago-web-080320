class CreateGroceryStores < ActiveRecord::Migration[5.2]
  def change
    
    create_table :grocery_stores do |t|
      t.string :name
      t.integer :size_in_sq_ft
      t.string :location
      t.boolean :twenty_four_hours
 
      t.timestamps
    end

  end
end

# string, integer, boolean, text (real long strings), float/decimal


# GroceryStore (model name - singluar) 
# grocery_stores (table name - plural)
# - name - string
# - size_in_sq_ft - integer 
# - location - string
# - 24hours - boolean