class User < ApplicationRecord
    has_secure_password

    has_many :tickets
    has_many :events, through: :tickets

    validates :email, :username, presence: true, uniqueness: true
end
