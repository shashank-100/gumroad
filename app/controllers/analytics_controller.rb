# frozen_string_literal: true

class AnalyticsController < ApplicationController
  def index
    render inertia: 'Analytics', props: {}
  end
end
