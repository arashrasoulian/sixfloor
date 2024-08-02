class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  validates :name, presence: true
  validates :phone, presence: true
  validates :city, presence: true
  # validates :teacher, presence: true

  validates :address, presence: true
  validates :birthday, presence: true
  validates :educational_level, presence: true
  validates :classkey, presence: true, uniqueness: true

  has_many :scores, dependent: :destroy
  has_many :documents, dependent: :destroy
  has_many :classes_created, class_name: 'ClassData', foreign_key: 'user_id', dependent: :destroy

  def enrolled_classes
    ClassData.where('students @> ?', "{#{self.id}}")
  end

end
