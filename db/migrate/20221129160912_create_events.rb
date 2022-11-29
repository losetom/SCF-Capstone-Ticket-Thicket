class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :address
      t.string :date
      t.string :time
      t.string :city
      t.string :state
      t.string :zip
      t.string :venue

      t.timestamps
    end
  end
end
