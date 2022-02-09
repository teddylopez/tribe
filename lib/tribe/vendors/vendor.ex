defmodule Tribe.Vendors.Vendor do
  use Ecto.Schema
  import Ecto.Changeset

  schema "vendors" do
    field :name, :string
    field :logo, :string
    field :description, :string
    field :rating, :float
    field :review_count

    has_many :products, Tribe.Products.Product
    belongs_to :users, Tribe.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(product, attrs) do
    product
    |> cast(attrs, [:name, :price, :rating, :image_url, :description, :review_count])
    |> validate_required([:name, :price, :rating, :image_url, :description])
  end
end
