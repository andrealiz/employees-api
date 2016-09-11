class ApplicationController < ActionController::Base
  before_actioin :restrict_access
  protect_from_forgery with: :null_session

  def restrict_access
    authenticate_or_request_with_http_token do |api_key, options|
      # need a token and a value of true (in postman, input "Authorization" and "Token token=letmein" on the fields under the web address for GET request)
      # make sure that api_key is something we can check against to make sure that they are who they say they are, or hackers will be able to do multiple GET requests.
      User.find_by(api_key: api_key, email: request.headers['x-User-Email']) 
    end
  end


end
