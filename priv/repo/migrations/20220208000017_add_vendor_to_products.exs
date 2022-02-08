defmodule Tribe.Repo.Migrations.AddVendorToProducts do
  use Ecto.Migration

  def change do
    alter table("products") do
      add :vendor_id, references(:vendors, on_delete: :delete_all)
    end
  end
end
