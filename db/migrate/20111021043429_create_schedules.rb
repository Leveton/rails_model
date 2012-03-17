class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.integer :id
      t.string :date
      t.string :hour
      
      t.integer :user_id

      t.timestamps
    end
  end
end
