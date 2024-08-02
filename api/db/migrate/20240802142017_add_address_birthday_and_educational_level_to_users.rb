class AddAddressBirthdayAndEducationalLevelToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :address, :string
    add_column :users, :birthday, :date
    add_column :users, :educational_level, :string
  end
end
