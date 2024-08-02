class AddClasskeyToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :classkey, :string
  end
end
