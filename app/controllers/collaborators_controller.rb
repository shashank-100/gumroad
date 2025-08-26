# frozen_string_literal: true

class CollaboratorsController < ApplicationController
  def index
    render inertia: 'Collaborators', props: {}
  end
end
