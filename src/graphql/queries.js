/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDemoSkillsList = /* GraphQL */ `
  query GetDemoSkillsList($id: ID!) {
    getDemoSkillsList(id: $id) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const listDemoSkillsLists = /* GraphQL */ `
  query ListDemoSkillsLists(
    $filter: ModelDemoSkillsListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDemoSkillsLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDomainInterestedList = /* GraphQL */ `
  query GetDomainInterestedList($id: ID!) {
    getDomainInterestedList(id: $id) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const listDomainInterestedLists = /* GraphQL */ `
  query ListDomainInterestedLists(
    $filter: ModelDomainInterestedListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDomainInterestedLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSuggestedServiceList = /* GraphQL */ `
  query GetSuggestedServiceList($id: ID!) {
    getSuggestedServiceList(id: $id) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const listSuggestedServiceLists = /* GraphQL */ `
  query ListSuggestedServiceLists(
    $filter: ModelSuggestedServiceListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestedServiceLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentRegister = /* GraphQL */ `
  query GetStudentRegister($id: ID!) {
    getStudentRegister(id: $id) {
      student_id
      student_name
      recent_college
      degree
      current_employee
      your_role
      experience
      phone_number
      about_yourself {
        grow_junction_url
        first_name
        last_name
        short_description
        about_yourself
      }
      username
      social {
        linkedin_url
        facebook_url
        instagram_url
        personal_web_url
        other_url
      }
      contact_info {
        email
        mobile
        whatsapp
      }
      education {
        degree
        college_university
        course
        graduation_year
      }
      professional_info {
        occupation
        organization
        location
        position
        experience {
          years
          months
        }
      }
      profile_image
      student_profile
      interestedSkills
      linkedIn_url
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStudentRegisters = /* GraphQL */ `
  query ListStudentRegisters(
    $filter: ModelStudentRegisterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentRegisters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        student_id
        student_name
        recent_college
        degree
        current_employee
        your_role
        experience
        phone_number
        about_yourself {
          grow_junction_url
          first_name
          last_name
          short_description
          about_yourself
        }
        username
        social {
          linkedin_url
          facebook_url
          instagram_url
          personal_web_url
          other_url
        }
        contact_info {
          email
          mobile
          whatsapp
        }
        education {
          degree
          college_university
          course
          graduation_year
        }
        professional_info {
          occupation
          organization
          location
          position
          experience {
            years
            months
          }
        }
        profile_image
        student_profile
        interestedSkills
        linkedIn_url
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOneOnOne = /* GraphQL */ `
  query GetOneOnOne($id: ID!) {
    getOneOnOne(id: $id) {
      sessionTitle
      username
      listedPrice
      finalPrice
      numberOfSessions
      sessionDuration
      sessionDurationIn
      description
      questions {
        id
        text
        type
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOneOnOnes = /* GraphQL */ `
  query ListOneOnOnes(
    $filter: ModelOneOnOneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOneOnOnes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        sessionTitle
        username
        listedPrice
        finalPrice
        numberOfSessions
        sessionDuration
        sessionDurationIn
        description
        questions {
          id
          text
          type
        }
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTextQuery = /* GraphQL */ `
  query GetTextQuery($id: ID!) {
    getTextQuery(id: $id) {
      title
      username
      description
      responseTime
      responseTimeIn
      listedPrice
      finalPrice
      questions {
        id
        text
        type
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTextQueries = /* GraphQL */ `
  query ListTextQueries(
    $filter: ModelTextQueryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTextQueries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        username
        description
        responseTime
        responseTimeIn
        listedPrice
        finalPrice
        questions {
          id
          text
          type
        }
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMentorRegister = /* GraphQL */ `
  query GetMentorRegister($id: ID!) {
    getMentorRegister(id: $id) {
      mentor_id
      mentor_name
<<<<<<< HEAD
      profile_url
=======
>>>>>>> 13d9775112052c1c5e69b06457b90fad6acb7ec1
      mentor_availability_id
      phone_number
      about_yourself {
        grow_junction_url
        first_name
        last_name
        short_description
        about_yourself
      }
      username
      social {
        linkedin_url
        facebook_url
        instagram_url
        personal_web_url
        other_url
      }
      currency
      time_zone
      contact_info {
        email
        mobile
        whatsapp
      }
      education {
        degree
        college_university
        course
        graduation_year
      }
      professional_info {
        occupation
        organization
        location
        position
        experience {
          years
          months
        }
      }
      profile_image
      domain_id
      url
      mentor_service_id
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMentorRegisters = /* GraphQL */ `
  query ListMentorRegisters(
    $filter: ModelMentorRegisterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentorRegisters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        mentor_id
        mentor_name
<<<<<<< HEAD
        profile_url
=======
>>>>>>> 13d9775112052c1c5e69b06457b90fad6acb7ec1
        mentor_availability_id
        phone_number
        about_yourself {
          grow_junction_url
          first_name
          last_name
          short_description
          about_yourself
        }
        username
        social {
          linkedin_url
          facebook_url
          instagram_url
          personal_web_url
          other_url
        }
        currency
        time_zone
        contact_info {
          email
          mobile
          whatsapp
        }
        education {
          degree
          college_university
          course
          graduation_year
        }
        professional_info {
          occupation
          organization
          location
          position
          experience {
            years
            months
          }
        }
        profile_image
        domain_id
        url
        mentor_service_id
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMentorAvailability = /* GraphQL */ `
  query GetMentorAvailability($id: ID!) {
    getMentorAvailability(id: $id) {
      mentor_availability_id
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
export const listMentorAvailabilities = /* GraphQL */ `
  query ListMentorAvailabilities(
    $filter: ModelMentorAvailabilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentorAvailabilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        mentor_availability_id
        mentor_schedule {
          id
          sortId
          day
          checked
          time_schedule {
            items {
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
      nextToken
    }
  }
`;
export const getMentorWeekSchedule = /* GraphQL */ `
  query GetMentorWeekSchedule($id: ID!) {
    getMentorWeekSchedule(id: $id) {
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
export const listMentorWeekSchedules = /* GraphQL */ `
  query ListMentorWeekSchedules(
    $filter: ModelMentorWeekScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentorWeekSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTimeSchedule = /* GraphQL */ `
  query GetTimeSchedule($id: ID!) {
    getTimeSchedule(id: $id) {
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
export const listTimeSchedules = /* GraphQL */ `
  query ListTimeSchedules(
    $filter: ModelTimeScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Mentor {
          id
          sortId
          day
          checked
          time_schedule {
            items {
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
      nextToken
    }
  }
`;
export const timeSchedulesByMentorWeekScheduleId = /* GraphQL */ `
  query TimeSchedulesByMentorWeekScheduleId(
    $MentorWeekScheduleId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModeltimeScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    timeSchedulesByMentorWeekScheduleId(
      MentorWeekScheduleId: $MentorWeekScheduleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Mentor {
          id
          sortId
          day
          checked
          time_schedule {
            items {
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
      nextToken
    }
  }
`;
