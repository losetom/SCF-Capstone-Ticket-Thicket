class User < ApplicationRecord
    has_many :tickets
    has_many :events, through: :tickets

    validates :name, presence: true
end
