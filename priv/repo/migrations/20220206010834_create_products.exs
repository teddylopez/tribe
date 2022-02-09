defmodule Tribe.Repo.Migrations.CreateProducts do
  use Ecto.Migration

  def change do
    create table(:products) do
      add :name, :string, required: true
      add :image_url, :string
      add :description, :string, required: true
      add :price, :float, required: true
      add :rating, :float, default: 0, required: true
      add :review_count, :integer, default: 0, required: true

      timestamps()
    end
  end
end
