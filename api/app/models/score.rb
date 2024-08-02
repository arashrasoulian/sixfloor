class Score < ApplicationRecord
    belongs_to :user

    # Optional: Validations
    validates :pdf, presence: true
    validates :mark, presence: true
end
