class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :reader_id
      t.integer :magazine_id
      t.integer :price
    end
  end
end

# reader_id    - foreign key
# magazine_id - foreign key
# price

# - A `Subscription` belongs to a `Magazine`, and a `Subscription` also belongs to an `Reader`. In your migration, create any columns your `subscriptions` table will need to establish these relationships.
#   - The `subscriptions` table should also have a `price` column that stores an integer.