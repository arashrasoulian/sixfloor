class Document < ApplicationRecord
  belongs_to :user

  validates :pdf, presence: true
  validates :doc_type, presence: true
end
