defmodule ToutSurMaVille.Repo do
  use Ecto.Repo,
    otp_app: :tout_sur_ma_ville,
    adapter: Ecto.Adapters.Postgres
end
