defmodule TribeWeb.PageController do
  use TribeWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
