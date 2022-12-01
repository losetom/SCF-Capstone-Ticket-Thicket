class UpdateEventsZip < ActiveRecord::Migration[7.0]
  def change
    change_column(:events, :zip, 'integer USING CAST(zip AS integer)')
  end
end
