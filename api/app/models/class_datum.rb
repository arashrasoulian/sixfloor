class ClassData < ApplicationRecord
  self.table_name = 'class_data'
  belongs_to :user  # This refers to the owner or creator of the class

  # We use serialize to store an array of student IDs
  serialize :students, Array

  # Validations (optional)
  validates :class_date, presence: true
  validates :duration, presence: true, numericality: { greater_than: 0 }
  validates :user_id, presence: true
end
