class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :country
      t.string :instrument
      t.string :phone_number

      t.timestamps null: false
    end
  end
end
