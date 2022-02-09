defmodule TribeWeb.HomeLive do
  use TribeWeb, :live_view

  alias Tribe.{Products, Repo}
  alias TribeWeb.PageView

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, clicks: 0, products: Products.list_products())}
  end

  @impl true
  def render(assigns) do
    PageView.render("home.html", assigns)
  end
end
