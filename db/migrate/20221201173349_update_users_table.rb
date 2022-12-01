class UpdateUsersTable < ActiveRecord::Migration[7.0]
  def change
    rename_column(:users, :name, :username)
    add_column(:users, :password_digest, :string)
    add_column(:users, :email, :string)
  end
end
