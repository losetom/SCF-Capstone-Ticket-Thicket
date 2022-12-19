class AddUserIdAndEventIdToTickets < ActiveRecord::Migration[7.0]
  def change
    add_column :tickets, :user_id, :integer
    add_column :tickets, :event_id, :integer
    # add_column :tickets, :price, :float
  end
end
