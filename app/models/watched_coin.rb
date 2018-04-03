class WatchedCoin < ApplicationRecord
  belongs_to :user
  belongs_to :coin
  validates_uniqueness_of :cmc_id, :name, :symbol, {case_sensitive: false}
  validatas_presence_of :cmc_id, :name, :symbol
end
