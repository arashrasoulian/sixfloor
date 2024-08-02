class CreateScores < ActiveRecord::Migration[7.1]
  def change
    create_table :scores do |t|
      t.references :user, null: false, foreign_key: true
      t.string :pdf
      t.text :mark

      t.timestamps
    end
  end
end
