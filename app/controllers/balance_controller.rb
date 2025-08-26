# frozen_string_literal: true

class BalanceController < ApplicationController
  def index
    render inertia: 'Balance', props: {}
  end
end
