# frozen_string_literal: true

class CustomersController < ApplicationController
  def index
    render inertia: 'Customers', props: {}
  end
end
