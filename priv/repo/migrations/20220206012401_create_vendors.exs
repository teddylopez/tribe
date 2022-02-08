defmodule Tribe.Repo.Migrations.CreateVendors do
  use Ecto.Migration

  def change do
    create table(:vendors) do
      add :name, :string, required: true
      add :logo, :string
      add :description, :string
      add :user_id, references(:users, on_delete: :delete_all), null: false
      add :rating, :float, default: 0, required: true
      add :review_count, :float, default: 0, required: true

      timestamps()
    end
  end
end
