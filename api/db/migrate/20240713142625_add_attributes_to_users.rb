class AddAttributesToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :phone, :string
    add_column :users, :name, :string
    add_column :users, :city, :string
    add_column :users, :teacher, :boolean
  end
end
