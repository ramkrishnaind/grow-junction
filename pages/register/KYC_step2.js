import React, { useEffect, useState } from "react";
import { color } from "../../public/theme/Color";
import BoxBodyContainer from "../components/common/BoxBodyContainer";
import KYC_header from "../components/registration/KYC_header";
import Button from "../ui-kit/Button";
import SkeletonLoader from "../ui-kit/SkeletonLoader";
import * as mutations from "../../src/graphql/mutations";
import * as queries from "../../src/graphql/queries";
import { API, Auth } from "aws-amplify";
import { useRouter } from "next/router";

const KYC_step2 = () => {
  const router = useRouter();
  const [serviceList, setServiceList] = useState();
  const [showServiceInput, setShowServiceInput] = useState(false);
  const [serviceName, setServiceName] = useState({ value: "" });
  const [loading, setLoading] = useState(false);
  const [serviceListLoading, setServiceListLoading] = useState(true);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const { username } = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    try {
      const listData = await API.graphql({
        query: queries.listSuggestedServiceLists,
        //   authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      setServiceList(listData?.data?.listSuggestedServiceLists?.items);
      setServiceListLoading(false);
    } catch (err) {
      console.log("err", err);
      setServiceListLoading(false);
    }
  };

  const saveDomainSkills = async () => {
    setLoading(true);
    try {
      const data = { value: serviceName };
      const postData = await API.graphql({
        query: mutations.createSuggestedServiceList,
        variables: { input: serviceName },
        // authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log("post data", postData);
      getCurrentUser();
      setShowServiceInput(false);
      setLoading(false);
    } catch (e) {
      console.log("e", e);
      setLoading(false);
      setShowServiceInput(false);
    }
  };

  return (
    <BoxBodyContainer
      styleOverride={{ alignItems: "flex-start" }}
      body={
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <KYC_header
            stepImage={require("../../public/assets/icon/StepIndicator2.png")}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
                // alignSelf: "center",
                // backgroundColor: "red",
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
                What service you want to offer
              </div>
              <div
                style={{
                  color: color.lightGrey,
                  fontSize: 16,
                  fontWeight: 400,
                  marginTop: 16,
                }}
              >
                List the services which you think your target audience will like
              </div>

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
                Suggested services
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  flex: 1,
                  maxWidth: 700,
                }}
              >
                {!serviceListLoading ? (
                  <>
                    {serviceList?.map((item, index) => {
                      let selectedItem = false;
                      selectedList?.map((key, index) => {
                        if (key === item?.id) {
                          selectedItem = true;
                        }
                      });
                      return (
                        <div
                          key={index.toString()}
                          style={{
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 6,
                            paddingBottom: 6,
                            color: color.blackVariant,
                            borderWidth: 1,
                            borderColor: selectedItem
                              ? color.btnColor
                              : color.blackVariant,
                            borderRadius: 22,
                            marginRight: 10,
                            marginBottom: 20,
                            height: 43,
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            let count = 0;
                            if (selectedList.length) {
                              selectedList.map((items, index) => {
                                if (items === item?.id) {
                                  count = 1;
                                  setSelectedList(
                                    selectedList.filter(
                                      (items) => items !== item?.id
                                    )
                                  );
                                }
                              });
                              if (count == 0) {
                                setSelectedList((selectedList) => [
                                  ...selectedList,
                                  item?.id,
                                ]);
                              }
                            } else
                              setSelectedList((selectedList) => [
                                ...selectedList,
                                item?.id,
                              ]);
                          }}
                        >
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              color: color.blackVariant,
                            }}
                          >
                            {item?.value}
                          </div>
                        </div>
                      );
                    })}
                    {showServiceInput && (
                      <input
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: 25,
                          borderWidth: 1,
                          borderColor: color.blackVariant,
                          paddingLeft: 20,
                          color: color.blackVariant,
                          marginRight: 10,
                          //   marginLeft: 10,
                          width: 129,
                          height: 43,
                          fontSize: 14,
                        }}
                        placeholder="Enter here..."
                        name="value"
                        onChange={(e) => {
                          setServiceName(() => ({
                            [e.target.name]: e.target.value,
                          }));
                        }}
                      />
                    )}
                    <Button
                      label={showServiceInput ? "Save" : "Add another"}
                      styleOverride={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 6,
                        paddingBottom: 6,
                        color: color.white,
                        borderWidth: 1,
                        borderColor: color.blackVariant,
                        borderRadius: 22,
                        height: 43,
                        backgroundColor: color.blackVariant,
                        width: showServiceInput ? 100 : 160,
                        fontSize: 14,
                      }}
                      loader={loading}
                      onClick={() => {
                        setShowServiceInput(true);
                        if (showServiceInput) {
                          saveDomainSkills();
                        }
                      }}
                    />
                  </>
                ) : (
                  <SkeletonLoader />
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Button
                  label={"Previous"}
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
                  loader={loading}
                  onClick={() => {
                    //   setShowDomainInput(true);
                    //   if (showDomainInput) {
                    //     saveDomainSkills();
                    //   }
                    router.push("/register/KYC_step1    ");
                  }}
                />
                <Button
                  label={"Continue"}
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
                    //   setShowDomainInput(true);
                    //   if (showDomainInput) {
                    //     saveDomainSkills();
                    //   }
                    router.push("/register/MentorAvailability");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default KYC_step2;
