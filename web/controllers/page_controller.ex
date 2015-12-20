defmodule SevenMinuteWorkoutApp.PageController do
  use SevenMinuteWorkoutApp.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
