class CreateDocuments < ActiveRecord::Migration[7.1]
  def change
    create_table :documents do |t|
      t.references :user, null: false, foreign_key: true
      t.string :pdf
      t.string :doc_type

      t.timestamps
    end
  end
end
