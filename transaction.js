// some work left like modifiedCounts etc...

const { MongoClient } = require('mongodb');
const uri = require('./atlas_uri');

const client = new MongoClient(uri);

const accounts = client.db("bank").collection("account");
const transfers = client.db("bank").collection("transfers");
const amount = 50;
const sender_account = "1000000";
const receiver_account = "2000000";
const transfer = {transfer_ID: "TD0000001", amount: amount, sender_ID: sender_account, receiver_ID: receiver_account, date: new Date().toISOString()};


const session = client.startSession();


const main = async () => {
  try {
    let transactionResult = await session.withTransaction( async () => {
      //step 1. Updating the sender account
      const senderAccountUpdate = await accounts.updateOne(
        {account_no: 1000000},
        {$inc: {balance: -amount}},
        { session }
      );

      //step 2. Updating recieving account
      const receiverAccountUpdate = await accounts.updateOne(
        {account_no: 2000000},
        {$inc: {balance: amount}},
        {session }
      );

      //step 3. Including TID in transfers collection

      const transfersUpdate = await transfers.insertOne(
        transfer,
        { session }
      );

      //step 4. Including TID in sender accounts

      const senderAccountTransferID = await accounts.updateOne(
        {account_no: 1000000},
        {$push: {transfers: transfer.transfer_ID}},
        { session }
      );

      //step 5. Including TID in Receiver's account

      const receiverAccountTransferID = await accounts.updateOne(
        {account_no: 2000000},
        {$push: {transfers: transfer.transfer_ID}},
        { session }
      );
    });

    console.log("Committing Transaction!");

    if(transactionResult) {
      console.log("Transaction processed Successfully!");
    } else {
      console.log("Transaction failed!");
    }
  } catch(err) {
    console.error("Something went wrong!" + err);
    process.exit(1);
  } finally {
    session.endSession();
    client.close();
  }
};
main();