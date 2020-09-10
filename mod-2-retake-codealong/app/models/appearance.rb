class Appearance < ApplicationRecord
    belongs_to :guest
    belongs_to :episode

    validates_inclusion_of :rating, :in => 1..5

#     5. Appearance Rating Validation
# The rating on an Appearance should be between 1 and 5 (inclusive - 1 and 5 are okay).

# Add a validation to ensure that the rating is between 1 and 5.
# Add handling for this error to the Appearance create action.
# The validation error should be shown on the Appearance creation form when a user attempts to save an appearance with an invalid rating.
end
