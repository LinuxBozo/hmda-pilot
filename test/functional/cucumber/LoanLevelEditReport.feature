#https://github.com/cfpb/hmda-pilot/issues/29

Feature: User can view a loan-level report of the syntactical/validity edits
    As a user
    I want to be able to see an electronic report of the edits that have failed at the loan ID level
    So I can fix the data on my system at the loan level or comment on why the failure existed

  Scenario: Check loan-level detail
    Given that I am at the HMDA homepage
    When I upload the 'V262short.dat' file and submit
    And I wait for the file to be processed
    And I click on an edit failure section within the high level summary information
    Then I am able to see the summary and detail information about the edit failures

