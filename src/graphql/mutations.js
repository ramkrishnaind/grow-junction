/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDemoSkillsList = /* GraphQL */ `
  mutation CreateDemoSkillsList(
    $input: CreateDemoSkillsListInput!
    $condition: ModelDemoSkillsListConditionInput
  ) {
    createDemoSkillsList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateDemoSkillsList = /* GraphQL */ `
  mutation UpdateDemoSkillsList(
    $input: UpdateDemoSkillsListInput!
    $condition: ModelDemoSkillsListConditionInput
  ) {
    updateDemoSkillsList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteDemoSkillsList = /* GraphQL */ `
  mutation DeleteDemoSkillsList(
    $input: DeleteDemoSkillsListInput!
    $condition: ModelDemoSkillsListConditionInput
  ) {
    deleteDemoSkillsList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const createDomainInterestedList = /* GraphQL */ `
  mutation CreateDomainInterestedList(
    $input: CreateDomainInterestedListInput!
    $condition: ModelDomainInterestedListConditionInput
  ) {
    createDomainInterestedList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateDomainInterestedList = /* GraphQL */ `
  mutation UpdateDomainInterestedList(
    $input: UpdateDomainInterestedListInput!
    $condition: ModelDomainInterestedListConditionInput
  ) {
    updateDomainInterestedList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteDomainInterestedList = /* GraphQL */ `
  mutation DeleteDomainInterestedList(
    $input: DeleteDomainInterestedListInput!
    $condition: ModelDomainInterestedListConditionInput
  ) {
    deleteDomainInterestedList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const createSuggestedServiceList = /* GraphQL */ `
  mutation CreateSuggestedServiceList(
    $input: CreateSuggestedServiceListInput!
    $condition: ModelSuggestedServiceListConditionInput
  ) {
    createSuggestedServiceList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateSuggestedServiceList = /* GraphQL */ `
  mutation UpdateSuggestedServiceList(
    $input: UpdateSuggestedServiceListInput!
    $condition: ModelSuggestedServiceListConditionInput
  ) {
    updateSuggestedServiceList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteSuggestedServiceList = /* GraphQL */ `
  mutation DeleteSuggestedServiceList(
    $input: DeleteSuggestedServiceListInput!
    $condition: ModelSuggestedServiceListConditionInput
  ) {
    deleteSuggestedServiceList(input: $input, condition: $condition) {
      id
      username
      value
      createdAt
      updatedAt
    }
  }
`;
export const createStudentRegister = /* GraphQL */ `
  mutation CreateStudentRegister(
    $input: CreateStudentRegisterInput!
    $condition: ModelStudentRegisterConditionInput
  ) {
    createStudentRegister(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateStudentRegister = /* GraphQL */ `
  mutation UpdateStudentRegister(
    $input: UpdateStudentRegisterInput!
    $condition: ModelStudentRegisterConditionInput
  ) {
    updateStudentRegister(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteStudentRegister = /* GraphQL */ `
  mutation DeleteStudentRegister(
    $input: DeleteStudentRegisterInput!
    $condition: ModelStudentRegisterConditionInput
  ) {
    deleteStudentRegister(input: $input, condition: $condition) {
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
    }
  }
`;
export const createOneOnOne = /* GraphQL */ `
  mutation CreateOneOnOne(
    $input: CreateOneOnOneInput!
    $condition: ModelOneOnOneConditionInput
  ) {
    createOneOnOne(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateOneOnOne = /* GraphQL */ `
  mutation UpdateOneOnOne(
    $input: UpdateOneOnOneInput!
    $condition: ModelOneOnOneConditionInput
  ) {
    updateOneOnOne(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteOneOnOne = /* GraphQL */ `
  mutation DeleteOneOnOne(
    $input: DeleteOneOnOneInput!
    $condition: ModelOneOnOneConditionInput
  ) {
    deleteOneOnOne(input: $input, condition: $condition) {
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
    }
  }
`;
export const createTextQuery = /* GraphQL */ `
  mutation CreateTextQuery(
    $input: CreateTextQueryInput!
    $condition: ModelTextQueryConditionInput
  ) {
    createTextQuery(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateTextQuery = /* GraphQL */ `
  mutation UpdateTextQuery(
    $input: UpdateTextQueryInput!
    $condition: ModelTextQueryConditionInput
  ) {
    updateTextQuery(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteTextQuery = /* GraphQL */ `
  mutation DeleteTextQuery(
    $input: DeleteTextQueryInput!
    $condition: ModelTextQueryConditionInput
  ) {
    deleteTextQuery(input: $input, condition: $condition) {
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
    }
  }
`;
export const createWorkshop = /* GraphQL */ `
  mutation CreateWorkshop(
    $input: CreateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    createWorkshop(input: $input, condition: $condition) {
      title
      username
      description
      callDuration
      callDurationIn
      listedPrice
      finalPrice
      workshopDate
      workshopTime
      workshopImage
      hideService
      limitedParticipants
      audienceSize
      questions {
        id
        text
        type
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkshop = /* GraphQL */ `
  mutation UpdateWorkshop(
    $input: UpdateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    updateWorkshop(input: $input, condition: $condition) {
      title
      username
      description
      callDuration
      callDurationIn
      listedPrice
      finalPrice
      workshopDate
      workshopTime
      workshopImage
      hideService
      limitedParticipants
      audienceSize
      questions {
        id
        text
        type
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkshop = /* GraphQL */ `
  mutation DeleteWorkshop(
    $input: DeleteWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    deleteWorkshop(input: $input, condition: $condition) {
      title
      username
      description
      callDuration
      callDurationIn
      listedPrice
      finalPrice
      workshopDate
      workshopTime
      workshopImage
      hideService
      limitedParticipants
      audienceSize
      questions {
        id
        text
        type
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createCourses = /* GraphQL */ `
  mutation CreateCourses(
    $input: CreateCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    createCourses(input: $input, condition: $condition) {
      courseTitle
      username
      description
      numberOfSessions
      sessionDuration
      sessionDurationIn
      listedPrice
      finalPrice
      courseDate
      courseTime
      hideService
      limitParticipants
      audienceSize
      courseImage
      sessions {
        id
        text
        sessionDate
        sessionTime
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateCourses = /* GraphQL */ `
  mutation UpdateCourses(
    $input: UpdateCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    updateCourses(input: $input, condition: $condition) {
      courseTitle
      username
      description
      numberOfSessions
      sessionDuration
      sessionDurationIn
      listedPrice
      finalPrice
      courseDate
      courseTime
      hideService
      limitParticipants
      audienceSize
      courseImage
      sessions {
        id
        text
        sessionDate
        sessionTime
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourses = /* GraphQL */ `
  mutation DeleteCourses(
    $input: DeleteCoursesInput!
    $condition: ModelCoursesConditionInput
  ) {
    deleteCourses(input: $input, condition: $condition) {
      courseTitle
      username
      description
      numberOfSessions
      sessionDuration
      sessionDurationIn
      listedPrice
      finalPrice
      courseDate
      courseTime
      hideService
      limitParticipants
      audienceSize
      courseImage
      sessions {
        id
        text
        sessionDate
        sessionTime
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createPackages = /* GraphQL */ `
  mutation CreatePackages(
    $input: CreatePackagesInput!
    $condition: ModelPackagesConditionInput
  ) {
    createPackages(input: $input, condition: $condition) {
      packageTitle
      username
      description
      listedPrice
      finalPrice
      packageImage
      emailContent
      uploadFile
      hideService
      limitParticipants
      audienceSize
      packageServices {
        id
        text
        title
        duration
        price
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updatePackages = /* GraphQL */ `
  mutation UpdatePackages(
    $input: UpdatePackagesInput!
    $condition: ModelPackagesConditionInput
  ) {
    updatePackages(input: $input, condition: $condition) {
      packageTitle
      username
      description
      listedPrice
      finalPrice
      packageImage
      emailContent
      uploadFile
      hideService
      limitParticipants
      audienceSize
      packageServices {
        id
        text
        title
        duration
        price
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deletePackages = /* GraphQL */ `
  mutation DeletePackages(
    $input: DeletePackagesInput!
    $condition: ModelPackagesConditionInput
  ) {
    deletePackages(input: $input, condition: $condition) {
      packageTitle
      username
      description
      listedPrice
      finalPrice
      packageImage
      emailContent
      uploadFile
      hideService
      limitParticipants
      audienceSize
      packageServices {
        id
        text
        title
        duration
        price
      }
      id
      createdAt
      updatedAt
<<<<<<< HEAD
=======
    }
  }
`;
export const createConfigurations = /* GraphQL */ `
  mutation CreateConfigurations(
    $input: CreateConfigurationsInput!
    $condition: ModelConfigurationsConditionInput
  ) {
    createConfigurations(input: $input, condition: $condition) {
      timezone
      username
      calender
      personalMeetingLink
      bookingPeriod
      bookingPeriodIn
      noticePeriod
      noticePeriodIn
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateConfigurations = /* GraphQL */ `
  mutation UpdateConfigurations(
    $input: UpdateConfigurationsInput!
    $condition: ModelConfigurationsConditionInput
  ) {
    updateConfigurations(input: $input, condition: $condition) {
      timezone
      username
      calender
      personalMeetingLink
      bookingPeriod
      bookingPeriodIn
      noticePeriod
      noticePeriodIn
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteConfigurations = /* GraphQL */ `
  mutation DeleteConfigurations(
    $input: DeleteConfigurationsInput!
    $condition: ModelConfigurationsConditionInput
  ) {
    deleteConfigurations(input: $input, condition: $condition) {
      timezone
      username
      calender
      personalMeetingLink
      bookingPeriod
      bookingPeriodIn
      noticePeriod
      noticePeriodIn
      id
      createdAt
      updatedAt
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
    }
  }
`;
export const createMentorRegister = /* GraphQL */ `
  mutation CreateMentorRegister(
    $input: CreateMentorRegisterInput!
    $condition: ModelMentorRegisterConditionInput
  ) {
    createMentorRegister(input: $input, condition: $condition) {
      mentor_id
      mentor_name
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
    }
  }
`;
export const updateMentorRegister = /* GraphQL */ `
  mutation UpdateMentorRegister(
    $input: UpdateMentorRegisterInput!
    $condition: ModelMentorRegisterConditionInput
  ) {
    updateMentorRegister(input: $input, condition: $condition) {
      mentor_id
      mentor_name
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
    }
  }
`;
export const deleteMentorRegister = /* GraphQL */ `
  mutation DeleteMentorRegister(
    $input: DeleteMentorRegisterInput!
    $condition: ModelMentorRegisterConditionInput
  ) {
    deleteMentorRegister(input: $input, condition: $condition) {
      mentor_id
      mentor_name
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
<<<<<<< HEAD
=======
    }
  }
`;
export const createMentorAvailability = /* GraphQL */ `
  mutation CreateMentorAvailability(
    $input: CreateMentorAvailabilityInput!
    $condition: ModelMentorAvailabilityConditionInput
  ) {
    createMentorAvailability(input: $input, condition: $condition) {
      mentor_availability_id
      username
      mentor_schedule {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateMentorAvailability = /* GraphQL */ `
  mutation UpdateMentorAvailability(
    $input: UpdateMentorAvailabilityInput!
    $condition: ModelMentorAvailabilityConditionInput
  ) {
    updateMentorAvailability(input: $input, condition: $condition) {
      mentor_availability_id
      username
      mentor_schedule {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteMentorAvailability = /* GraphQL */ `
  mutation DeleteMentorAvailability(
    $input: DeleteMentorAvailabilityInput!
    $condition: ModelMentorAvailabilityConditionInput
  ) {
    deleteMentorAvailability(input: $input, condition: $condition) {
      mentor_availability_id
      username
      mentor_schedule {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createMentorWeekSchedule = /* GraphQL */ `
  mutation CreateMentorWeekSchedule(
    $input: CreateMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    createMentorWeekSchedule(input: $input, condition: $condition) {
      id
      sortId
      day
      checked
      username
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            username
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          username
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMentorWeekSchedule = /* GraphQL */ `
  mutation UpdateMentorWeekSchedule(
    $input: UpdateMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    updateMentorWeekSchedule(input: $input, condition: $condition) {
      id
      sortId
      day
      checked
      username
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            username
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          username
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMentorWeekSchedule = /* GraphQL */ `
  mutation DeleteMentorWeekSchedule(
    $input: DeleteMentorWeekScheduleInput!
    $condition: ModelMentorWeekScheduleConditionInput
  ) {
    deleteMentorWeekSchedule(input: $input, condition: $condition) {
      id
      sortId
      day
      checked
      username
      time_schedule {
        items {
          Mentor {
            id
            sortId
            day
            checked
            username
            time_schedule {
              nextToken
            }
            createdAt
            updatedAt
          }
          MentorWeekScheduleId
          startTime
          startTimeMeridian
          endTime
          username
          endTimeMeridian
          leftMeridianDropDown
          rightMeridianDropDown
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTimeSchedule = /* GraphQL */ `
  mutation CreateTimeSchedule(
    $input: CreateTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    createTimeSchedule(input: $input, condition: $condition) {
      Mentor {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      username
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateTimeSchedule = /* GraphQL */ `
  mutation UpdateTimeSchedule(
    $input: UpdateTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    updateTimeSchedule(input: $input, condition: $condition) {
      Mentor {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      username
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimeSchedule = /* GraphQL */ `
  mutation DeleteTimeSchedule(
    $input: DeleteTimeScheduleInput!
    $condition: ModelTimeScheduleConditionInput
  ) {
    deleteTimeSchedule(input: $input, condition: $condition) {
      Mentor {
        id
        sortId
        day
        checked
        username
        time_schedule {
          items {
            Mentor {
              id
              sortId
              day
              checked
              username
              createdAt
              updatedAt
            }
            MentorWeekScheduleId
            startTime
            startTimeMeridian
            endTime
            username
            endTimeMeridian
            leftMeridianDropDown
            rightMeridianDropDown
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      MentorWeekScheduleId
      startTime
      startTimeMeridian
      endTime
      username
      endTimeMeridian
      leftMeridianDropDown
      rightMeridianDropDown
      id
      createdAt
      updatedAt
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
    }
  }
`;
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
      availableSameTime
      daySchedules {
        everyday {
          everyday
          time {
            startTime
            endTime
          }
        }
        Sunday {
          Sunday
          time {
            startTime
            endTime
          }
        }
        Monday {
          Monday
          time {
            startTime
            endTime
          }
        }
        Tuesday {
          Tuesday
          time {
            startTime
            endTime
          }
        }
        Wednesday {
          Wednesday
          time {
            startTime
            endTime
          }
        }
        Thursday {
          Thursday
          time {
            startTime
            endTime
          }
        }
        Friday {
          Friday
          time {
            startTime
            endTime
          }
        }
        Saturday {
          Saturday
          time {
            startTime
            endTime
          }
        }
      }
      username
      unavailableDates
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
      availableSameTime
      daySchedules {
        everyday {
          everyday
          time {
            startTime
            endTime
          }
        }
        Sunday {
          Sunday
          time {
            startTime
            endTime
          }
        }
        Monday {
          Monday
          time {
            startTime
            endTime
          }
        }
        Tuesday {
          Tuesday
          time {
            startTime
            endTime
          }
        }
        Wednesday {
          Wednesday
          time {
            startTime
            endTime
          }
        }
        Thursday {
          Thursday
          time {
            startTime
            endTime
          }
        }
        Friday {
          Friday
          time {
            startTime
            endTime
          }
        }
        Saturday {
          Saturday
          time {
            startTime
            endTime
          }
        }
      }
      username
      unavailableDates
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
      availableSameTime
      daySchedules {
        everyday {
          everyday
          time {
            startTime
            endTime
          }
        }
        Sunday {
          Sunday
          time {
            startTime
            endTime
          }
        }
        Monday {
          Monday
          time {
            startTime
            endTime
          }
        }
        Tuesday {
          Tuesday
          time {
            startTime
            endTime
          }
        }
        Wednesday {
          Wednesday
          time {
            startTime
            endTime
          }
        }
        Thursday {
          Thursday
          time {
            startTime
            endTime
          }
        }
        Friday {
          Friday
          time {
            startTime
            endTime
          }
        }
        Saturday {
          Saturday
          time {
            startTime
            endTime
          }
        }
      }
      username
      unavailableDates
      id
      createdAt
      updatedAt
    }
  }
`;
<<<<<<< HEAD
export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
      kyc_done
      register_type
      email
      name
      profile_image
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
      kyc_done
      register_type
      email
      name
      profile_image
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
      kyc_done
      register_type
      email
      name
      profile_image
      id
      createdAt
      updatedAt
    }
  }
`;
export const createConfigurations = /* GraphQL */ `
  mutation CreateConfigurations(
    $input: CreateConfigurationsInput!
    $condition: ModelConfigurationsConditionInput
  ) {
    createConfigurations(input: $input, condition: $condition) {
      timezone
      calender
      username
      personalMeetingLink
      bookingPeriod
      bookingPeriodIn
      noticePeriod
      noticePeriodIn
=======
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      given_name
      username
      family_name
      picture
      email
      kyc_done
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
      id
      createdAt
      updatedAt
    }
  }
`;
<<<<<<< HEAD
export const updateConfigurations = /* GraphQL */ `
  mutation UpdateConfigurations(
    $input: UpdateConfigurationsInput!
    $condition: ModelConfigurationsConditionInput
  ) {
    updateConfigurations(input: $input, condition: $condition) {
      timezone
      calender
      username
      personalMeetingLink
      bookingPeriod
      bookingPeriodIn
      noticePeriod
      noticePeriodIn
=======
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      given_name
      username
      family_name
      picture
      email
      kyc_done
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
      id
      createdAt
      updatedAt
    }
  }
`;
<<<<<<< HEAD
export const deleteConfigurations = /* GraphQL */ `
  mutation DeleteConfigurations(
    $input: DeleteConfigurationsInput!
    $condition: ModelConfigurationsConditionInput
  ) {
    deleteConfigurations(input: $input, condition: $condition) {
      timezone
      calender
      username
      personalMeetingLink
      bookingPeriod
      bookingPeriodIn
      noticePeriod
      noticePeriodIn
=======
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      given_name
      username
      family_name
      picture
      email
      kyc_done
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
      id
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
<<<<<<< HEAD
      description
      createdAt
      updatedAt
      username
=======
      username
      description
      createdAt
      updatedAt
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
<<<<<<< HEAD
      description
      createdAt
      updatedAt
      username
=======
      username
      description
      createdAt
      updatedAt
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
<<<<<<< HEAD
      description
      createdAt
      updatedAt
      username
=======
      username
      description
      createdAt
      updatedAt
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
    }
  }
`;
