import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView, Dimensions } from "react-native";
import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import RPC from './ethersRPC'; // for using ethers.js

const [userInfo, setUserInfo] = useState("");
const [key, setKey] = useState("");

const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: scheme });

const clientId = "BK-4a3zdrmKTMUTJlDjDJFsxTKrVxP0-VH2ed_aSjZsrK8beT8kUyZk0xDXfOouE-1y8zTkorp4HdUxlNFZ5JxM";
const providerUrl = "https://rpc.ankr.com/eth"; // Or your desired provider url

type TypeOfLogin =
  | "google"
  | "facebook"
  | "reddit"
  | "discord"
  | "twitch"
  | "apple"
  | "github"
  | "linkedin"
  | "twitter"
  | "weibo"
  | "line"
  | "email_password"
  | "passwordless"
  | "jwt";

const LOGIN_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  REDDIT: "reddit",
  DISCORD: "discord",
  TWITCH: "twitch",
  APPLE: "apple",
  LINE: "line",
  GITHUB: "github",
  KAKAO: "kakao",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  WEIBO: "weibo",
  WECHAT: "wechat",
  EMAIL_PASSWORDLESS: "email_passwordless",
  JWT: "jwt",
} as const;

export function login = async () => {
  try {
    uiConsole("Logging in");
      const web3auth = new Web3Auth(WebBrowser, {
        clientId,
        network: OPENLOGIN_NETWORK.TESTNET, // or other networks
      });
      const info = await web3auth.login({
        loginProvider: TypeOfLogin.GOOGLE,
        redirectUrl: resolvedRedirectUrl,
        mfaLevel: "none",
        curve: "secp256k1",
      });
      setUserInfo(info);
      setKey(info.privKey);
      uiConsole(info.privKey);
      uiConsole("Logged In");
    
  } catch (e) {
    uiConsole(e)
  }
}

export function logout = async () => {
  setKey('');
  await web3auth.logout();
  uiConsole("Logged Out");
}
