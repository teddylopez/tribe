defmodule Tribe.Repo do
  use Ecto.Repo,
    otp_app: :tribe,
    adapter: Ecto.Adapters.Postgres
end
