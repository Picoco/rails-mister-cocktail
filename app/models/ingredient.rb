class Ingredient < ApplicationRecord
  has_many :doses, after_remove: :destroy_ingredient_with_no_parent
  validates :name, presence: true, uniqueness: true
end
