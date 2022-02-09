defmodule TribeWeb.NavSearchLive do
  use TribeWeb, :live_view

  alias Tribe.{Products, Repo}
  alias TribeWeb.{PageView, LayoutView, SharedView}

  @impl true
  def mount(_params, _session, socket) do
    {:ok, socket, layout: {LayoutView, "only_inner_content.html"}}
  end

  @impl true
  def render(assigns) do
    SharedView.render("nav_search.html", assigns)
  end
end
