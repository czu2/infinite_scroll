class Post < ApplicationRecord

    scope :posts_in_range, -> (a, b) { all.length > b ? all[a..b] : [] }

end
