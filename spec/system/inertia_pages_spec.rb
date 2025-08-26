# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Inertia pages", type: :system do
  describe "Dashboard" do
    it "renders the dashboard page" do
      visit dashboard_path
      expect(page).to have_content("Dashboard")
    end
  end

  describe "Analytics" do
    it "renders the analytics page" do
      visit analytics_path
      expect(page).to have_content("Analytics")
    end
  end

  describe "Balance" do
    it "renders the balance page" do
      visit balance_path
      expect(page).to have_content("Balance")
    end
  end

  describe "Collaborators" do
    it "renders the collaborators page" do
      visit collaborators_path
      expect(page).to have_content("Collaborators")
    end
  end

  describe "Customers" do
    it "renders the customers page" do
      visit customers_path
      expect(page).to have_content("Customers")
    end
  end

  describe "Products" do
    it "renders the products page" do
      visit links_path
      expect(page).to have_content("Products")
    end
  end
end
