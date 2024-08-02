class CreateClassData < ActiveRecord::Migration[7.1]
  def change
    create_table :class_data do |t|
      t.datetime :class_date
      t.integer :duration
      t.integer :user_id
      t.jsonb :students

      t.timestamps
    end
  end
end
