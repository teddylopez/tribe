defmodule Tribe.Products.Product do
  use Ecto.Schema
  import Ecto.Changeset

  schema "products" do
    field :name, :string
    field :image_url, :string
    field :description, :string
    field :price, :float
    field :rating, :float
    field :review_count, :integer

    belongs_to :vendor, Tribe.Vendors.Vendor

    timestamps()
  end

  @doc false
  def changeset(product, attrs) do
    product
    |> cast(attrs, [:name, :price, :rating, :image_url, :description, :review_count])
    |> validate_required([:name, :price, :rating, :image_url, :description])
  end
end
