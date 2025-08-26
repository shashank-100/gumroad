# frozen_string_literal: true

class LinksController < ApplicationController
  def index
    render inertia: 'Products', props: {}
    end
end
