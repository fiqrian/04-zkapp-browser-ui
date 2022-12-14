import { FC, useEffect, useState, useRef } from "react";
// Styles
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button } from "@mui/material";
import "../styles/globals.css";
import { Box, Container, Typography, Alert, Stack } from "@mui/material";
import MainLayout from "./layouts/Main";
import "./reactCOIServiceWorker";
import ZkappWorkerClient from "./zkappWorkerClient";

import { PublicKey, PrivateKey, Field } from "snarkyjs";

let transactionFee = 0.1;

export default function App() {
  let [state, setState] = useState({
    zkappWorkerClient: null as null | ZkappWorkerClient,
    hasWallet: null as null | boolean,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null as null | Field,
    publicKey: null as null | PublicKey,
    zkappPublicKey: null as null | PublicKey,
    creatingTransaction: false,
  });

  // Status

  const status1 = () => {
    const el = document.getElementById("status1")!;
    el.style.display = "block";
    const el2 = document.getElementById("status2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("status3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("status4")!;
    el4.style.display = "none";
    const el5 = document.getElementById("status5")!;
    el5.style.display = "none";
    const el6 = document.getElementById("status6")!;
    el6.style.display = "none";
  };

  const status2 = () => {
    const el = document.getElementById("status1")!;
    el.style.display = "none";
    const el2 = document.getElementById("status2")!;
    el2.style.display = "block";
    const el3 = document.getElementById("status3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("status4")!;
    el4.style.display = "none";
    const el5 = document.getElementById("status5")!;
    el5.style.display = "none";
    const el6 = document.getElementById("status6")!;
    el6.style.display = "none";
  };

  const status3 = () => {
    const el = document.getElementById("status1")!;
    el.style.display = "none";
    const el2 = document.getElementById("status2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("status3")!;
    el3.style.display = "block";
    const el4 = document.getElementById("status4")!;
    el4.style.display = "none";
    const el5 = document.getElementById("status5")!;
    el5.style.display = "none";
    const el6 = document.getElementById("status6")!;
    el6.style.display = "none";
  };

  const status4 = () => {
    const el = document.getElementById("status1")!;
    el.style.display = "none";
    const el2 = document.getElementById("status2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("status3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("status4")!;
    el4.style.display = "block";
    const el5 = document.getElementById("status5")!;
    el5.style.display = "none";
    const el6 = document.getElementById("status6")!;
    el6.style.display = "none";
  };

  const status5 = () => {
    const el = document.getElementById("status1")!;
    el.style.display = "none";
    const el2 = document.getElementById("status2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("status3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("status4")!;
    el4.style.display = "none";
    const el5 = document.getElementById("status5")!;
    el5.style.display = "block";
    const el6 = document.getElementById("status6")!;
    el6.style.display = "none";
  };

  const status6 = () => {
    const el = document.getElementById("status1")!;
    el.style.display = "none";
    const el2 = document.getElementById("status2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("status3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("status4")!;
    el4.style.display = "none";
    const el5 = document.getElementById("status5")!;
    el5.style.display = "none";
    const el6 = document.getElementById("status6")!;
    el6.style.display = "block";
  };

  const send1 = () => {
    const el = document.getElementById("send1")!;
    el.style.display = "block";
    const el2 = document.getElementById("send2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("send3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("send4")!;
    el4.style.display = "none";
  };

  const send2 = () => {
    const el = document.getElementById("send1")!;
    el.style.display = "none";
    const el2 = document.getElementById("send2")!;
    el2.style.display = "block";
    const el3 = document.getElementById("send3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("send4")!;
    el4.style.display = "none";
  };

  const send3 = () => {
    const el = document.getElementById("send1")!;
    el.style.display = "none";
    const el2 = document.getElementById("send2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("send3")!;
    el3.style.display = "block";
    const el4 = document.getElementById("send4")!;
    el4.style.display = "none";
  };

  const send4 = () => {
    const el = document.getElementById("send1")!;
    el.style.display = "none";
    const el2 = document.getElementById("send2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("send3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("send4")!;
    el4.style.display = "block";
  };

  const donesend = () => {
    const el = document.getElementById("send1")!;
    el.style.display = "none";
    const el2 = document.getElementById("send2")!;
    el2.style.display = "none";
    const el3 = document.getElementById("send3")!;
    el3.style.display = "none";
    const el4 = document.getElementById("send4")!;
    el4.style.display = "none";
    const el5 = document.getElementById("sendLoading")!;
    el5.style.display = "none";
    const el6 = document.getElementById("sendDone")!;
    el6.style.display = "block";
    const el7 = document.getElementById("sendCheck")!;
    el7.style.display = "block";
    const el8 = document.getElementById("closeSend")!;
    el8.style.display = "block";
  };

  // -------------------------------------------------------
  // Do Setup
  const connectWallet = async () => {
    if (!state.hasBeenSetup) {
      const zkappWorkerClient = new ZkappWorkerClient();

      console.log("Loading SnarkyJS...");
      status1();
      await zkappWorkerClient.loadSnarkyJS();
      console.log("done");

      await zkappWorkerClient.setActiveInstanceToBerkeley();

      const mina = (window as any).mina;
      status2();

      if (mina == null) {
        setState({ ...state, hasWallet: false });
        return;
      }

      const publicKeyBase58: string = (await mina.requestAccounts())[0];
      const publicKey = PublicKey.fromBase58(publicKeyBase58);

      console.log("using key", publicKey.toBase58());

      console.log("checking if account exists...");
      const res = await zkappWorkerClient.fetchAccount({
        publicKey: publicKey!,
      });
      const accountExists = res.error == null;

      await zkappWorkerClient.loadContract();

      console.log("compiling zkApp");
      status3();
      await zkappWorkerClient.compileContract();
      console.log("zkApp compiled");

      const zkappPublicKey = PublicKey.fromBase58(
        "B62qrDe16LotjQhPRMwG12xZ8Yf5ES8ehNzZ25toJV28tE9FmeGq23A"
      );

      await zkappWorkerClient.initZkappInstance(zkappPublicKey);

      console.log("getting zkApp state...");
      await zkappWorkerClient.fetchAccount({ publicKey: zkappPublicKey });
      const currentNum = await zkappWorkerClient.getNum();
      console.log("current state:", currentNum.toString());

      setState({
        ...state,
        zkappWorkerClient,
        hasWallet: true,
        hasBeenSetup: true,
        publicKey,
        zkappPublicKey,
        accountExists,
        currentNum,
      });
    }
  };

  // -------------------------------------------------------
  const connectBtnclick = () => {
    const el = document.getElementById("loadingBtn")!;
    el.style.display = "block";
    const el2 = document.getElementById("connectBtn")!;
    el2.style.display = "none";
    const el3 = document.getElementById("loading")!;
    el3.style.display = "block";
    const el4 = document.getElementById("banner")!;
    el4.style.display = "none";
    const el5 = document.getElementById("banner2")!;
    el5.style.display = "none";
  };

  const hideloadingBtn = () => {
    const el = document.getElementById("loadingBtn")!;
    el.style.display = "none";
    const el2 = document.getElementById("loading")!;
    el2.style.display = "none";
    const el3 = document.getElementById("succes")!;
    el3.style.display = "block";
  };

  const closeGetclick = () => {
    const el = document.getElementById("getscreen")!;
    el.style.display = "none";
    const el2 = document.getElementById("getBtnDisable")!;
    el2.style.display = "none";
    const el3 = document.getElementById("getBtn")!;
    el3.style.display = "block";
    const el4 = document.getElementById("sendBtnDisable")!;
    el4.style.display = "none";
    const el5 = document.getElementById("sendBtn")!;
    el5.style.display = "block";
  };

  const closeSendclick = () => {
    const el = document.getElementById("sendscreen")!;
    el.style.display = "none";
    const el2 = document.getElementById("sendBtnDisable")!;
    el2.style.display = "none";
    const el3 = document.getElementById("sendBtn")!;
    el3.style.display = "block";
    const el4 = document.getElementById("getBtnDisable")!;
    el4.style.display = "none";
    const el5 = document.getElementById("getBtn")!;
    el5.style.display = "block";
    const el6 = document.getElementById("sendDone")!;
    el6.style.display = "none";
    const el7 = document.getElementById("sendCheck")!;
    el7.style.display = "none";
    const el8 = document.getElementById("closeSend")!;
    el8.style.display = "none";
  };

  const getscreenShow = () => {
    const el = document.getElementById("getscreen")!;
    el.style.display = "block";
    const el2 = document.getElementById("getBtn")!;
    el2.style.display = "none";
    const el3 = document.getElementById("getBtnDisable")!;
    el3.style.display = "block";
    const el4 = document.getElementById("sendBtnDisable")!;
    el4.style.display = "block";
    const el5 = document.getElementById("sendBtn")!;
    el5.style.display = "none";
  };

  const sendscreenShow = () => {
    const el = document.getElementById("sendscreen")!;
    el.style.display = "block";
    const el2 = document.getElementById("sendBtn")!;
    el2.style.display = "none";
    const el3 = document.getElementById("sendBtnDisable")!;
    el3.style.display = "block";
    const el4 = document.getElementById("getBtnDisable")!;
    el4.style.display = "block";
    const el5 = document.getElementById("getBtn")!;
    el5.style.display = "none";
    const el6 = document.getElementById("sendLoading")!;
    el6.style.display = "block";
  };

  const noAccount = () => {
    const el = document.getElementById("loadingBtn")!;
    el.style.display = "none";
    const el2 = document.getElementById("caution")!;
    el2.style.display = "block";
    const el3 = document.getElementById("ftxt")!;
    el3.style.display = "block";
    const el4 = document.getElementById("backNoAccount")!;
    el4.style.display = "block";
    const el5 = document.getElementById("loading")!;
    el5.style.display = "none";
  };

  const backNoAccountClick = () => {
    location.reload();
  };

  const backNoWalletClick = () => {
    location.reload();
  };

  const noWallet = () => {
    const el = document.getElementById("loadingBtn")!;
    el.style.display = "none";
    const el2 = document.getElementById("caution")!;
    el2.style.display = "block";
    const el3 = document.getElementById("walletTxt")!;
    el3.style.display = "block";
    const el4 = document.getElementById("backNoWallet")!;
    el4.style.display = "block";
    const el5 = document.getElementById("loading")!;
    el5.style.display = "none";
  };

  const getload = () => {
    const el = document.getElementById("getLoading")!;
    el.style.display = "block";
    const el2 = document.getElementById("gettext")!;
    el2.style.display = "none";
    const el3 = document.getElementById("getnumber")!;
    el3.style.display = "none";
  };

  const getdone = () => {
    const el = document.getElementById("getLoading")!;
    el.style.display = "none";
    const el2 = document.getElementById("gettext")!;
    el2.style.display = "block";
    const el3 = document.getElementById("getnumber")!;
    el3.style.display = "block";
  };
  // -------------------------------------------------------

  // -------------------------------------------------------
  // Send a transaction

  const onSendTransaction = async () => {
    setState({ ...state, creatingTransaction: true });
    send1();
    console.log("sending a transaction...");

    await state.zkappWorkerClient!.fetchAccount({
      publicKey: state.publicKey!,
    });

    await state.zkappWorkerClient!.createUpdateTransaction();

    console.log("creating proof...");
    send2();
    await state.zkappWorkerClient!.proveUpdateTransaction();

    console.log("getting Transaction JSON...");
    send3();
    const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON();

    console.log("requesting send transaction...");
    send4();
    const { hash } = await (window as any).mina.sendTransaction({
      transaction: transactionJSON,
      feePayer: {
        fee: transactionFee,
        memo: "",
      },
    });

    console.log(
      "See transaction at https://berkeley.minaexplorer.com/transaction/" + hash
    );

    donesend();

    setState({ ...state, creatingTransaction: false });
  };

  // -------------------------------------------------------
  // Refresh the current state

  const onRefreshCurrentNum = async () => {
    console.log("getting zkApp state...");
    getload();
    await state.zkappWorkerClient!.fetchAccount({
      publicKey: state.zkappPublicKey!,
    });
    const currentNum = await state.zkappWorkerClient!.getNum();
    console.log("current state:", currentNum.toString());
    getdone();

    setState({ ...state, currentNum });
  };

  let hasWallet;
  if (state.hasWallet != null && !state.hasWallet) {
    const auroLink = "https://www.aurowallet.com/";
    hasWallet = (
      <a
        id="walletLink"
        style={{ display: "block" }}
        href={auroLink}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className={styles.walletLink}>[[CLICK HERE]]</h1>
      </a>
    );
    status4();
    noWallet();
  }

  let setupText = state.hasBeenSetup ? "SnarkyJS Ready" : "Loading...";
  let setup = (
    <div id="setup" style={{ display: "block" }}>
      {" "}
      {setupText} {hasWallet}
    </div>
  );

  let accountDoesNotExist;
  if (state.hasBeenSetup && !state.accountExists) {
    const faucetLink =
      "https://faucet.minaprotocol.com/?address=" + state.publicKey!.toBase58();
    accountDoesNotExist = (
      <a
        id="flink"
        style={{ display: "block" }}
        href={faucetLink}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className={styles.faucetHere}>[[CLICK HERE]]</h1>
      </a>
    );
    status5();
    noAccount();
    hasBeenSetup: false;
  }

  let mainContent;
  if (state.hasBeenSetup && state.accountExists) {
    mainContent = (
      <div>
        <button
          id="sendBtn"
          style={{ display: "block" }}
          onClick={() => {
            onSendTransaction();
            sendscreenShow();
          }}
          className={styles.sendBtn}
        >
          SEND
        </button>
        <button
          id="getBtn"
          style={{ display: "block" }}
          onClick={() => {
            onRefreshCurrentNum();
            getscreenShow();
          }}
          className={styles.getBtn}
        >
          GET STATE
        </button>
        <button
          id="sendBtnDisable"
          style={{ display: "none" }}
          className={styles.sendBtnDisable}
        >
          SEND
        </button>
        <button
          id="getBtnDisable"
          style={{ display: "none" }}
          className={styles.getBtnDisable}
        >
          GET STATE
        </button>

        <h1 className={styles.txtAddrs}>{state.publicKey!.toBase58()} </h1>
        <h1 className={styles.addrs}>Address :</h1>

        <div
          id="getscreen"
          style={{ display: "none" }}
          className={styles.getscreen}
        >
          <span className={styles.getscreenBlack}> </span>
          <span className={styles.getscreenImg}> </span>

          <a
            id="closeGet"
            style={{ display: "block" }}
            onClick={() => {
              closeGetclick();
            }}
          >
            <span className={styles.closeGet}> </span>
          </a>

          <span
            id="getLoading"
            style={{ display: "none" }}
            className={styles.getLoading}
          >
            {" "}
          </span>

          <h1
            id="gettext"
            style={{ display: "none" }}
            className={styles.txtState}
          >
            Current Number in ZkApp :
          </h1>
          <h1
            id="getnumber"
            style={{ display: "none" }}
            className={styles.numState}
          >
            {state.currentNum!.toString()}{" "}
          </h1>
        </div>

        <div
          id="sendscreen"
          style={{ display: "none" }}
          className={styles.sendscreen}
        >
          <span className={styles.sendscreenBlack}> </span>
          <span className={styles.sendscreenImg}> </span>

          <a
            id="closeSend"
            style={{ display: "none" }}
            onClick={() => {
              closeSendclick();
            }}
          >
            <span className={styles.closeSend}> </span>
          </a>

          <span
            id="sendLoading"
            style={{ display: "none" }}
            className={styles.sendLoading}
          >
            {" "}
          </span>
          <span
            id="sendCheck"
            style={{ display: "none" }}
            className={styles.sendCheck}
          >
            {" "}
          </span>
          <span
            id="sendDone"
            style={{ display: "none" }}
            className={styles.sendDone}
          >
            {" "}
          </span>

          <h1
            id="send1"
            style={{ display: "none" }}
            className={styles.statusSendTxt}
          >
            Sending a Transaction...
          </h1>
          <h1
            id="send2"
            style={{ display: "none" }}
            className={styles.statusSendTxt}
          >
            Creating Proof...
          </h1>
          <h1
            id="send3"
            style={{ display: "none" }}
            className={styles.statusSendTxt}
          >
            Getting Transaction JSON...
          </h1>
          <h1
            id="send4"
            style={{ display: "none" }}
            className={styles.statusSendTxt}
          >
            Requesting Send Transaction...
          </h1>
        </div>
      </div>
    );
    hideloadingBtn();
    status6();
  }

  return (
    <MainLayout>
      <div id="shadow-box" className={styles.container}>
        <Box
          sx={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h1">MINA TRANSACTION</Typography>
              <Typography variant="h4">ZkApp Testnet Protocol ??????</Typography>
            </Box>
          </Container>
        </Box>
        <Head>
          <title>zkApp</title>
          <meta name="description" content="ZkApp By Fiqrian Faturachman" />
          <meta name="viewport" content="width=1280, initial-scale=2.0" />
          <link
            href="../images/ico.ico"
            rel="stylesheet/icon"
            type="image/x-icon"
          />
        </Head>

        <div id="homepage card-2 " className={styles.homepage}>
          <span className={styles.homepageImg}> </span>
          <Button
            id="connectBtn"
            style={{ display: "block" }}
            onClick={() => {
              connectBtnclick();
              connectWallet();
            }}
            className={styles.connectBtn}
          >
            CONNECT
          </Button>

          <button
            id="loadingBtn"
            style={{ display: "none" }}
            className={styles.loadingBtn}
          >
            {" "}
          </button>

          <span
            id="loading"
            style={{ display: "none" }}
            className={styles.loading}
          >
            {" "}
          </span>

          <Alert
            severity="info"
            id="status1"
            className={styles.statusTxt}
            style={{ display: "none" }}
          >
            <Stack sx={{ width: "100%" }} spacing={2}>
              Sync & Checking Wallet ...
            </Stack>
          </Alert>
          <Alert
            severity="info"
            id="status2"
            className={styles.statusTxt}
            style={{ display: "none" }}
          >
            <Stack sx={{ width: "100%" }} spacing={2}>
              Sync DONE! Connect to Wallet...
            </Stack>
          </Alert>
          <Alert
            severity="info"
            id="status3"
            className={styles.statusTxt}
            style={{ display: "none" }}
          >
            <Stack sx={{ width: "100%" }} spacing={2}>
              Checking & Validation Address...
            </Stack>
          </Alert>
          <Alert
            severity="info"
            id="status4"
            className={styles.statusTxt}
            style={{ display: "none" }}
          >
            <Stack sx={{ width: "100%" }} spacing={2}>
              Wallet Extension Not Found!
            </Stack>
          </Alert>
          <Alert
            severity="info"
            id="status5"
            className={styles.statusTxt}
            style={{ display: "none" }}
          >
            <Stack sx={{ width: "100%" }} spacing={2}>
              Address Not Valid or No Balance!
            </Stack>
          </Alert>
          <Alert
            severity="info"
            id="status6"
            className={styles.statusTxt}
            style={{ display: "none" }}
          >
            <Stack sx={{ width: "100%" }} spacing={2}>
              READY FOR TRANSACTION!!!
            </Stack>
          </Alert>

          <span
            id="caution"
            style={{ display: "none" }}
            className={styles.caution}
          >
            {" "}
          </span>

          <span
            id="succes"
            style={{ display: "none" }}
            className={styles.succes}
          >
            {" "}
          </span>

          <h1
            id="ftxt"
            style={{ display: "none" }}
            className={styles.faucetTxt}
          >
            Invalid Account or No Balance!! Please check and fund on this link{" "}
          </h1>

          <h1
            id="walletTxt"
            style={{ display: "none" }}
            className={styles.walletTxt}
          >
            Could not find a wallet. Please Install Auro wallet and Re-Connect!!{" "}
          </h1>

          <a
            id="backNoAccount"
            style={{ display: "none" }}
            onClick={() => {
              backNoAccountClick();
            }}
          >
            <span className={styles.backNoAccount}> </span>
          </a>

          <a
            id="backNoWallet"
            style={{ display: "none" }}
            onClick={() => {
              backNoWalletClick();
            }}
          >
            <span className={styles.backNoWallet}> </span>
          </a>

          <span
            id="banner"
            style={{ display: "block" }}
            className={styles.banner}
          >
            {" "}
          </span>
          <span
            id="banner2"
            style={{ display: "block" }}
            className={styles.banner2}
          >
            {" "}
          </span>

          {mainContent}
          {accountDoesNotExist}
          {hasWallet}
        </div>
      </div>
    </MainLayout>
  );
}
