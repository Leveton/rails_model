class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.string :product
      t.integer :user_id
      t.boolean :refunded

      t.timestamps
    end
    add_index :payments, :user_id
    add_index :payments, :created_at
  end
end
