import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { color } from '../../public/theme/Color'
import BoxBodyContainer from '../components/common/BoxBodyContainer'
import KYC_header from '../components/registration/KYC_header'
import Button from '../ui-kit/Button'
import CheckBox from '../ui-kit/CheckBox'
import DropDown from '../ui-kit/DropDown'
import TextField from '../ui-kit/TextField'
import * as mutations from '../../src/graphql/mutations'
import { API } from 'aws-amplify'
import { v4 as uuid } from 'uuid'

const timeAvailability = [
  {
    day: 'Sunday',
    checked: false,
    sortId: 1,
    time_schedule: [
      {
        startTime: '00',
        leftMeridianDropDown: false,
        startTimeMeridian: 'AM',
        endTime: '00',
        rightMeridianDropDown: false,
        endTimeMeridian: 'AM',
      },
    ],
  },
  {
    day: 'Monday',
    checked: false,
    sortId: 2,
    time_schedule: [
      {
        startTime: '00',
        leftMeridianDropDown: false,
        startTimeMeridian: 'AM',
        endTime: '00',
        rightMeridianDropDown: false,
        endTimeMeridian: 'AM',
      },
    ],
  },
  {
    day: 'Tuesday',
    checked: false,
    sortId: 3,
    time_schedule: [
      {
        startTime: '00',
        leftMeridianDropDown: false,
        startTimeMeridian: 'AM',
        endTime: '00',
        rightMeridianDropDown: false,
        endTimeMeridian: 'AM',
      },
    ],
  },
  {
    day: 'Wednesday',
    checked: false,
    sortId: 4,
    time_schedule: [
      {
        startTime: '00',
        leftMeridianDropDown: false,
        startTimeMeridian: 'AM',
        endTime: '00',
        rightMeridianDropDown: false,
        endTimeMeridian: 'AM',
      },
    ],
  },
  {
    day: 'Thrusday',
    checked: false,
    sortId: 5,
    time_schedule: [
      {
        startTime: '00',
        leftMeridianDropDown: false,
        startTimeMeridian: 'AM',
        endTime: '00',
        rightMeridianDropDown: false,
        endTimeMeridian: 'AM',
      },
    ],
  },
  {
    day: 'Friday',
    checked: false,
    sortId: 6,
    time_schedule: [
      {
        startTime: '00',
        leftMeridianDropDown: false,
        startTimeMeridian: 'AM',
        endTime: '00',
        rightMeridianDropDown: false,
        endTimeMeridian: 'AM',
      },
    ],
  },
  {
    day: 'Saurday',
    checked: false,
    sortId: 7,
    time_schedule: [
      {
        startTime: '00',
        leftMeridianDropDown: false,
        startTimeMeridian: 'AM',
        endTime: '00',
        rightMeridianDropDown: false,
        endTimeMeridian: 'AM',
      },
    ],
  },
]

const sameAvailability = [
  {
    day: 'Everyday',
    checked: true,
    time_schedule: [
      {
        startTime: '00',
        leftMeridianDropDown: false,
        startTimeMeridian: 'AM',
        endTime: '00',
        rightMeridianDropDown: false,
        endTimeMeridian: 'AM',
      },
    ],
  },
]

const meridian = ['AM', 'PM']

const MentorAvailability = () => {
  const router = useRouter()
  const [sameTimeAvailabel, setSameTimeAvailabel] = useState(false)
  const [mentorAvailability, setMentorAvailability] = useState(timeAvailability)
  const [sameTimeAvailability, setSameTimeAvailability] =
    useState(sameAvailability)
  const [loading, setLoading] = useState(false)

  const availability = sameTimeAvailabel ? sameAvailability : mentorAvailability

  const handleSubmit = async () => {
    setLoading(true)
    if (sameTimeAvailabel) {
      timeAvailability.map((item, index) => {
        item['time_schedule'] = sameTimeAvailability[0]?.time_schedule
        item['checked'] = true
      })
    }
    // console.log(timeAvailability)
    timeAvailability.map(async (items, index) => {
      let payload = {
        id: uuid(),
        day: items?.day,
        sortId: items?.sortId,
        checked: items?.checked,
      }
      let in_count = 0
      try {
        const weekSchedule = await API.graphql({
          query: mutations.createMentorWeekSchedule,
          variables: { input: payload },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })
        in_count = items?.time_schedule?.length
        console.log(weekSchedule)
        items?.time_schedule.map(async (item, index) => {
          let payload = {
            MentorWeekScheduleId:
              weekSchedule?.data?.createMentorWeekSchedule?.id,
            startTime: item?.startTime,
            startTimeMeridian: item?.startTimeMeridian,
            endTime: item?.endTime,
            endTimeMeridian: item?.endTimeMeridian,
            leftMeridianDropDown: item?.leftMeridianDropDown,
            rightMeridianDropDown: item?.rightMeridianDropDown,
          }

          try {
            const postTimeShedule = await API.graphql({
              query: mutations.createTimeSchedule,
              variables: { input: payload },
              authMode: 'AMAZON_COGNITO_USER_POOLS',
            })
            console.log(postTimeShedule)
            if (items?.sortId === 7 && in_count === index + 1) {
              setLoading(false)
              router.push('/register/KYC_step4')
            }
          } catch (e) {
            console.log('iiner time schedulr error', e)
          }
        })
      } catch (e) {
        console.log('week schedulr error', e)
      }
    })
  }

  return (
    <BoxBodyContainer
      styleOverride={{ alignItems: 'flex-start' }}
      body={
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <KYC_header
            stepImage={require('../../public/assets/icon/StepIndicator3.png')}
          />
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'column',
                maxWidth: 750,
              }}
            >
              <div
                style={{
                  color: color.blackVariant,
                  fontWeight: 400,
                  fontSize: 36,
                  marginTop: 60,
                }}
              >
                Let your audience know your availability
              </div>
              <div
                style={{
                  color: color.lightGrey,
                  fontSize: 16,
                  fontWeight: 400,
                  marginTop: 16,
                }}
              >
                Leting your audience know your availability will help them
                connect or opt for your service at their convenience, you can
                edit it multiple time later
              </div>

              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    color: color.blackVariant,
                    marginBottom: 20,
                    fontSize: 16,
                    fontWeight: 400,
                    marginTop: 56,
                    marginBottom: 24,
                  }}
                >
                  Select days you’ll be available
                </div>
                <CheckBox
                  title={`I'm Available same time everyday`}
                  checkBool={sameTimeAvailabel}
                  onSubmit={() => {
                    setSameTimeAvailabel(!sameTimeAvailabel)
                  }}
                  styleOverride={{ alignItems: 'center' }}
                />
              </div>
              {/* {sameTimeAvailabel?:} */}
              {availability?.map((item, index) => {
                return (
                  <div
                    style={{
                      backgroundColor: color.white,
                      display: 'flex',
                      flexDirection: 'row',
                      paddingTop: 24,
                      paddingBottom: 24,
                      paddingRight: 40,
                      paddingLeft: 40,
                    }}
                    key={index.toString()}
                  >
                    <CheckBox
                      checkBool={item?.checked}
                      onSubmit={() => {
                        // setSameTimeAvailabel(!sameTimeAvailabel)
                        if (sameTimeAvailabel) {
                          const payload = [...sameTimeAvailability]
                          payload[index]['checked'] = !item?.checked
                            ? true
                            : false

                          setSameTimeAvailability(payload)
                        } else {
                          const payload = [...mentorAvailability]
                          payload[index]['checked'] = !item?.checked
                            ? true
                            : false

                          setMentorAvailability(payload)
                        }
                      }}
                    />

                    <div
                      style={{
                        color: color.black,
                        fontSize: 18,
                        alignSelf: 'center',
                        marginRight: 109,
                        width: 30,
                        marginLeft: 15,
                      }}
                    >
                      {item?.day}
                    </div>
                    <div>
                      {item?.time_schedule?.map((items, in_index) => {
                        return (
                          <div
                            key={in_index.toString()}
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              marginTop: 10,
                              // alignSelf: 'center',
                            }}
                          >
                            <TextField
                              label=""
                              id="url"
                              value={items?.startTime}
                              placeholder="10"
                              styleOverride={{
                                backgroundColor: color.white,
                                height: 34,
                                borderColor: color.borderGrey,
                                width: 122,
                                padding: 2,
                                paddingRight: 15,
                                marginTop: 2,
                              }}
                              textStyleOverride={{
                                backgroundColor: color.white,
                                paddingLeft: 8,
                              }}
                              imageType={true}
                              handleIncrement={() => {
                                if (sameTimeAvailabel) {
                                  const payload = [...sameTimeAvailability]
                                  const dateArr = payload[index]?.time_schedule
                                  const dateTime =
                                    payload[index]?.time_schedule[in_index]
                                  let cal_add = Number(dateTime?.startTime)
                                  if (cal_add >= 0 && cal_add < 12) {
                                    cal_add = cal_add + 1
                                  }
                                  const updatePayload = {
                                    ...dateTime,
                                    startTime: cal_add.toString(),
                                  }
                                  dateArr[in_index] = updatePayload
                                  payload[index]['selectedTime'] = dateArr
                                  console.log('payload', payload)
                                  setSameTimeAvailability(payload)
                                } else {
                                  const payload = [...mentorAvailability]
                                  const dateArr = payload[index]?.time_schedule
                                  const dateTime =
                                    payload[index]?.time_schedule[in_index]
                                  let cal_add = Number(dateTime?.startTime)
                                  if (cal_add >= 0 && cal_add < 12) {
                                    cal_add = cal_add + 1
                                  }
                                  const updatePayload = {
                                    ...dateTime,
                                    startTime: cal_add.toString(),
                                  }
                                  dateArr[in_index] = updatePayload
                                  payload[index]['selectedTime'] = dateArr
                                  console.log('payload', payload)
                                  setMentorAvailability(payload)
                                }
                              }}
                              handleDecrement={() => {
                                if (sameTimeAvailabel) {
                                  const payload = [...sameTimeAvailability]
                                  const dateArr = payload[index]?.time_schedule
                                  const dateTime =
                                    payload[index]?.time_schedule[in_index]
                                  let cal_add = Number(dateTime?.startTime)
                                  if (cal_add > 1 && cal_add <= 12) {
                                    cal_add = cal_add - 1
                                  }
                                  const updatePayload = {
                                    ...dateTime,
                                    startTime: cal_add.toString(),
                                  }
                                  dateArr[in_index] = updatePayload
                                  payload[index]['selectedTime'] = dateArr
                                  setSameTimeAvailability(payload)
                                } else {
                                  const payload = [...mentorAvailability]
                                  const dateArr = payload[index]?.time_schedule
                                  const dateTime =
                                    payload[index]?.time_schedule[in_index]
                                  let cal_add = Number(dateTime?.startTime)
                                  if (cal_add > 1 && cal_add <= 12) {
                                    cal_add = cal_add - 1
                                  }
                                  const updatePayload = {
                                    ...dateTime,
                                    startTime: cal_add.toString(),
                                  }
                                  dateArr[in_index] = updatePayload
                                  payload[index]['selectedTime'] = dateArr
                                  setMentorAvailability(payload)
                                }
                              }}
                            />
                            <div>
                              <DropDown
                                value={items?.startTimeMeridian}
                                containerStyle={{
                                  backgroundColor: color.white,
                                  height: 34,
                                  borderColor: color.borderGrey,
                                  borderWidth: 1,
                                  width: 81,
                                  borderRadius: 4,
                                }}
                                dropDownBool={items?.leftMeridianDropDown}
                                openDropDown={() => {
                                  if (sameTimeAvailabel) {
                                    const payload = [...sameTimeAvailability]
                                    const dateArr =
                                      payload[index]?.time_schedule
                                    const dateTime =
                                      payload[index]?.time_schedule[in_index]

                                    const updatePayload = {
                                      ...dateTime,
                                      leftMeridianDropDown: true,
                                    }
                                    dateArr[in_index] = updatePayload
                                    payload[index]['selectedTime'] = dateArr
                                    setSameTimeAvailability(payload)
                                  } else {
                                    const payload = [...mentorAvailability]
                                    const dateArr =
                                      payload[index]?.time_schedule
                                    const dateTime =
                                      payload[index]?.time_schedule[in_index]

                                    const updatePayload = {
                                      ...dateTime,
                                      leftMeridianDropDown: true,
                                    }
                                    dateArr[in_index] = updatePayload
                                    payload[index]['selectedTime'] = dateArr
                                    setMentorAvailability(payload)
                                  }
                                }}
                              />

                              {items?.leftMeridianDropDown ? (
                                <div
                                  style={{
                                    backgroundColor: color.lightGrey,
                                    padding: 5,
                                    borderRadius: 4,
                                    position: 'absolute',
                                    width: 81,
                                  }}
                                >
                                  {meridian?.map((item, _index) => {
                                    return (
                                      <div
                                        key={_index.toString()}
                                        style={{
                                          color: color.black,
                                          marginBottom: 2,
                                          fontSize: 14,
                                          cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                          if (sameTimeAvailabel) {
                                            const payload = [
                                              ...sameTimeAvailability,
                                            ]
                                            const dateArr =
                                              payload[index]?.time_schedule
                                            const dateTime =
                                              payload[index]?.time_schedule[
                                                in_index
                                              ]

                                            const updatePayload = {
                                              ...dateTime,
                                              startTimeMeridian: item,
                                              leftMeridianDropDown: false,
                                            }
                                            dateArr[in_index] = updatePayload
                                            payload[index]['selectedTime'] =
                                              dateArr
                                            setSameTimeAvailability(payload)
                                          } else {
                                            const payload = [
                                              ...mentorAvailability,
                                            ]
                                            const dateArr =
                                              payload[index]?.time_schedule
                                            const dateTime =
                                              payload[index]?.time_schedule[
                                                in_index
                                              ]

                                            const updatePayload = {
                                              ...dateTime,
                                              startTimeMeridian: item,
                                              leftMeridianDropDown: false,
                                            }
                                            dateArr[in_index] = updatePayload
                                            payload[index]['selectedTime'] =
                                              dateArr
                                            setMentorAvailability(payload)
                                          }
                                        }}
                                      >
                                        {item}
                                      </div>
                                    )
                                  })}
                                </div>
                              ) : null}
                            </div>
                            <div
                              style={{
                                color: color.black,
                                alignSelf: 'center',
                                paddingLeft: 24,
                                paddingRight: 24,
                                fontSize: 14,
                              }}
                            >
                              to
                            </div>
                            <TextField
                              label=""
                              id="url"
                              value={items?.endTime}
                              placeholder="10"
                              styleOverride={{
                                backgroundColor: color.white,
                                height: 34,
                                borderColor: color.borderGrey,
                                width: 122,
                                padding: 2,
                                paddingRight: 15,
                                marginTop: 2,
                              }}
                              textStyleOverride={{
                                backgroundColor: color.white,
                                paddingLeft: 8,
                              }}
                              imageType={true}
                              handleIncrement={() => {
                                if (sameTimeAvailabel) {
                                  const payload = [...sameTimeAvailability]
                                  const dateArr = payload[index]?.time_schedule
                                  const dateTime =
                                    payload[index]?.time_schedule[in_index]
                                  let cal_add = Number(dateTime?.endTime)
                                  if (cal_add >= 0 && cal_add < 12) {
                                    cal_add = cal_add + 1
                                  }
                                  const updatePayload = {
                                    ...dateTime,
                                    endTime: cal_add.toString(),
                                  }
                                  dateArr[in_index] = updatePayload
                                  payload[index]['selectedTime'] = dateArr
                                  setSameTimeAvailability(payload)
                                } else {
                                  const payload = [...mentorAvailability]
                                  const dateArr = payload[index]?.time_schedule
                                  const dateTime =
                                    payload[index]?.time_schedule[in_index]
                                  let cal_add = Number(dateTime?.endTime)
                                  if (cal_add >= 0 && cal_add < 12) {
                                    cal_add = cal_add + 1
                                  }
                                  const updatePayload = {
                                    ...dateTime,
                                    endTime: cal_add.toString(),
                                  }
                                  dateArr[in_index] = updatePayload
                                  payload[index]['selectedTime'] = dateArr
                                  setMentorAvailability(payload)
                                }
                              }}
                              handleDecrement={() => {
                                if (sameTimeAvailabel) {
                                  const payload = [...mentorAvailability]
                                  const dateArr = payload[index]?.time_schedule
                                  const dateTime =
                                    payload[index]?.time_schedule[in_index]
                                  let cal_add = Number(dateTime?.endTime)
                                  if (cal_add > 1 && cal_add <= 12) {
                                    cal_add = cal_add - 1
                                  }
                                  const updatePayload = {
                                    ...dateTime,
                                    endTime: cal_add.toString(),
                                  }
                                  dateArr[in_index] = updatePayload
                                  payload[index]['selectedTime'] = dateArr
                                  setMentorAvailability(payload)
                                } else {
                                  const payload = [...sameTimeAvailability]
                                  const dateArr = payload[index]?.time_schedule
                                  const dateTime =
                                    payload[index]?.time_schedule[in_index]
                                  let cal_add = Number(dateTime?.endTime)
                                  if (cal_add > 1 && cal_add <= 12) {
                                    cal_add = cal_add - 1
                                  }
                                  const updatePayload = {
                                    ...dateTime,
                                    endTime: cal_add.toString(),
                                  }
                                  dateArr[in_index] = updatePayload
                                  payload[index]['selectedTime'] = dateArr
                                  setSameTimeAvailability(payload)
                                }
                              }}
                            />
                            <div>
                              <DropDown
                                value={items?.endTimeMeridian}
                                containerStyle={{
                                  backgroundColor: color.white,
                                  height: 34,
                                  borderColor: color.borderGrey,
                                  borderWidth: 1,
                                  width: 81,
                                  borderRadius: 4,
                                }}
                                dropDownBool={items?.rightMeridianDropDown}
                                openDropDown={() => {
                                  if (sameTimeAvailabel) {
                                    const payload = [...sameTimeAvailability]
                                    const dateArr =
                                      payload[index]?.time_schedule
                                    const dateTime =
                                      payload[index]?.time_schedule[in_index]

                                    const updatePayload = {
                                      ...dateTime,
                                      rightMeridianDropDown: true,
                                    }
                                    dateArr[in_index] = updatePayload
                                    payload[index]['selectedTime'] = dateArr
                                    setSameTimeAvailability(payload)
                                  } else {
                                    const payload = [...mentorAvailability]
                                    const dateArr =
                                      payload[index]?.time_schedule
                                    const dateTime =
                                      payload[index]?.time_schedule[in_index]

                                    const updatePayload = {
                                      ...dateTime,
                                      rightMeridianDropDown: true,
                                    }
                                    dateArr[in_index] = updatePayload
                                    payload[index]['selectedTime'] = dateArr
                                    setMentorAvailability(payload)
                                  }
                                }}
                              />

                              {items?.rightMeridianDropDown ? (
                                <div
                                  style={{
                                    backgroundColor: color.lightGrey,
                                    padding: 5,
                                    borderRadius: 4,
                                    position: 'absolute',
                                    width: 81,
                                  }}
                                >
                                  {meridian?.map((item, _index) => {
                                    return (
                                      <div
                                        key={_index.toString()}
                                        style={{
                                          color: color.black,
                                          marginBottom: 2,
                                          fontSize: 14,
                                          cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                          if (sameTimeAvailabel) {
                                            const payload = [
                                              ...sameTimeAvailability,
                                            ]
                                            const dateArr =
                                              payload[index]?.time_schedule
                                            const dateTime =
                                              payload[index]?.time_schedule[
                                                in_index
                                              ]

                                            const updatePayload = {
                                              ...dateTime,
                                              endTimeMeridian: item,
                                              rightMeridianDropDown: false,
                                            }
                                            dateArr[in_index] = updatePayload
                                            payload[index]['selectedTime'] =
                                              dateArr
                                            setSameTimeAvailability(payload)
                                          } else {
                                            const payload = [
                                              ...mentorAvailability,
                                            ]
                                            const dateArr =
                                              payload[index]?.time_schedule
                                            const dateTime =
                                              payload[index]?.time_schedule[
                                                in_index
                                              ]

                                            const updatePayload = {
                                              ...dateTime,
                                              endTimeMeridian: item,
                                              rightMeridianDropDown: false,
                                            }
                                            dateArr[in_index] = updatePayload
                                            payload[index]['selectedTime'] =
                                              dateArr
                                            setMentorAvailability(payload)
                                          }
                                        }}
                                      >
                                        {item}
                                      </div>
                                    )
                                  })}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        )
                      })}
                      {sameTimeAvailabel ? null : (
                        <>
                          <Image
                            src={require('../../public/assets/icon/plus.png')}
                            alt=""
                            style={{
                              backgroundColor: color.black,
                              height: 15,
                              width: 15,
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              const payload = [...mentorAvailability]
                              const dateArr = payload[index]?.time_schedule

                              dateArr.push({
                                startTime: '00',
                                leftMeridianDropDown: false,
                                startTimeMeridian: 'AM',
                                endTime: '00',
                                rightMeridianDropDown: false,
                                endTimeMeridian: 'AM',
                              })
                              //   dateArr[in_index] = updatePayload
                              payload[index]['selectedTime'] = dateArr
                              //   console.log('payload', payload)
                              setMentorAvailability(payload)
                            }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  flex: 1,
                  maxWidth: 700,
                }}
              ></div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                  label={'Previous'}
                  styleOverride={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 6,
                    paddingBottom: 6,
                    color: color.white,
                    borderRadius: 22,
                    height: 43,
                    fontSize: 15,
                    backgroundColor: color.blackVariant,
                    width: 186,
                    marginTop: 70,
                    marginBottom: 48,
                    marginRight: 24,
                  }}
                  onClick={() => {
                    router.back()
                  }}
                />
                <Button
                  label={'Continue'}
                  styleOverride={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 6,
                    paddingBottom: 6,
                    color: color.white,
                    borderRadius: 22,
                    height: 43,
                    fontSize: 15,
                    backgroundColor: color.btnColor,
                    width: 186,
                    marginTop: 70,
                    marginBottom: 48,
                  }}
                  loader={loading}
                  onClick={() => {
                    handleSubmit()
                    // router.push('/register/KYC_step4')
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default MentorAvailability
