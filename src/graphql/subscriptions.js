/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDemoSkillsList = /* GraphQL */ `
  subscription OnCreateDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
  ) {
    onCreateDemoSkillsList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDemoSkillsList = /* GraphQL */ `
  subscription OnUpdateDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
  ) {
    onUpdateDemoSkillsList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDemoSkillsList = /* GraphQL */ `
  subscription OnDeleteDemoSkillsList(
    $filter: ModelSubscriptionDemoSkillsListFilterInput
  ) {
    onDeleteDemoSkillsList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDomainInterestedList = /* GraphQL */ `
  subscription OnCreateDomainInterestedList(
    $filter: ModelSubscriptionDomainInterestedListFilterInput
  ) {
    onCreateDomainInterestedList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDomainInterestedList = /* GraphQL */ `
  subscription OnUpdateDomainInterestedList(
    $filter: ModelSubscriptionDomainInterestedListFilterInput
  ) {
    onUpdateDomainInterestedList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDomainInterestedList = /* GraphQL */ `
  subscription OnDeleteDomainInterestedList(
    $filter: ModelSubscriptionDomainInterestedListFilterInput
  ) {
    onDeleteDomainInterestedList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSuggestedServiceList = /* GraphQL */ `
  subscription OnCreateSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
  ) {
    onCreateSuggestedServiceList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSuggestedServiceList = /* GraphQL */ `
  subscription OnUpdateSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
  ) {
    onUpdateSuggestedServiceList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSuggestedServiceList = /* GraphQL */ `
  subscription OnDeleteSuggestedServiceList(
    $filter: ModelSubscriptionSuggestedServiceListFilterInput
  ) {
    onDeleteSuggestedServiceList(filter: $filter) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $username: String
  ) {
    onCreateTodo(filter: $filter, username: $username) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $username: String
  ) {
    onUpdateTodo(filter: $filter, username: $username) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $username: String
  ) {
    onDeleteTodo(filter: $filter, username: $username) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentRegister = /* GraphQL */ `
  subscription OnCreateStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
    $username: String
  ) {
    onCreateStudentRegister(filter: $filter, username: $username) {
      interestedSkills
      recent_college
      degree
      education {
        degree
      }
      current_employee
      your_role
      experience
      phone_number
      linkedIn_url
      id
      createdAt
      updatedAt
      username
    }
  }
`;
export const onUpdateStudentRegister = /* GraphQL */ `
  subscription OnUpdateStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
    $username: String
  ) {
    onUpdateStudentRegister(filter: $filter, username: $username) {
      interestedSkills
      recent_college
      degree
      education {
        degree
      }
      current_employee
      your_role
      experience
      phone_number
      linkedIn_url
      id
      createdAt
      updatedAt
      username
    }
  }
`;
export const onDeleteStudentRegister = /* GraphQL */ `
  subscription OnDeleteStudentRegister(
    $filter: ModelSubscriptionStudentRegisterFilterInput
    $username: String
  ) {
    onDeleteStudentRegister(filter: $filter, username: $username) {
      interestedSkills
      recent_college
      degree
      education {
        degree
      }
      current_employee
      your_role
      experience
      phone_number
      linkedIn_url
      id
      createdAt
      updatedAt
      username
    }
  }
`;
export const onCreateMentorRegister = /* GraphQL */ `
  subscription OnCreateMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onCreateMentorRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      domain_id
      url
      mentor_service_id
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onUpdateMentorRegister = /* GraphQL */ `
  subscription OnUpdateMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateMentorRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      domain_id
      url
      mentor_service_id
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onDeleteMentorRegister = /* GraphQL */ `
  subscription OnDeleteMentorRegister(
    $filter: ModelSubscriptionMentorRegisterFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteMentorRegister(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      domain_id
      url
      mentor_service_id
      phone_number
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onCreateMentorAvailability = /* GraphQL */ `
  subscription OnCreateMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
    $username: String
    $owner: String
  ) {
    onCreateMentorAvailability(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_schedule {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onUpdateMentorAvailability = /* GraphQL */ `
  subscription OnUpdateMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateMentorAvailability(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_schedule {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onDeleteMentorAvailability = /* GraphQL */ `
  subscription OnDeleteMentorAvailability(
    $filter: ModelSubscriptionMentorAvailabilityFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteMentorAvailability(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      mentor_schedule {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onCreateMentorWeekSchedule = /* GraphQL */ `
  subscription OnCreateMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onCreateMentorWeekSchedule(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      id
      sortId
      day
      checked
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
            username
            owner
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
          username
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onUpdateMentorWeekSchedule = /* GraphQL */ `
  subscription OnUpdateMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateMentorWeekSchedule(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      id
      sortId
      day
      checked
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
            username
            owner
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
          username
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onDeleteMentorWeekSchedule = /* GraphQL */ `
  subscription OnDeleteMentorWeekSchedule(
    $filter: ModelSubscriptionMentorWeekScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteMentorWeekSchedule(
      filter: $filter
      username: $username
      owner: $owner
    ) {
      id
      sortId
      day
      checked
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
            username
            owner
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
          username
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onCreateTimeSchedule = /* GraphQL */ `
  subscription OnCreateTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onCreateTimeSchedule(filter: $filter, username: $username, owner: $owner) {
      Mentor {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onUpdateTimeSchedule = /* GraphQL */ `
  subscription OnUpdateTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onUpdateTimeSchedule(filter: $filter, username: $username, owner: $owner) {
      Mentor {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
export const onDeleteTimeSchedule = /* GraphQL */ `
  subscription OnDeleteTimeSchedule(
    $filter: ModelSubscriptionTimeScheduleFilterInput
    $username: String
    $owner: String
  ) {
    onDeleteTimeSchedule(filter: $filter, username: $username, owner: $owner) {
      Mentor {
        id
        sortId
        day
        checked
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              createdAt
              updatedAt
              username
              owner
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
            username
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        username
        owner
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
      username
      owner
    }
  }
`;
