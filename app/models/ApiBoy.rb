

module ApiBoy

  class FootballData
    include HTTParty
    base_uri "http://api.football-data.org"

    def initialize
      @api_key = ENV['API_KEY']
      p @api_key
      @headers = { "X-Auth-Token" => @api_key }
      p @headers
    end

    def get_teams
      teams = self.class.get("/alpha/soccerseasons/358/teams", headers: @headers)
      logos = []
      teams["teams"].each do |team|
        logos << team["crestUrl"]
      end
      return logos
    end

  end

end
