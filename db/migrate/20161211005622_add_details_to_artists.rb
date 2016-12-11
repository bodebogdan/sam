class AddDetailsToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :details, :string
  end
end
