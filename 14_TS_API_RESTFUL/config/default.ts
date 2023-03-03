const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
  port: 3000,
  dbUri: `mongodb://${dbUser}:${dbPassword}@ac-lvkebpp-shard-00-00.8vhrvk7.mongodb.net:27017,ac-lvkebpp-shard-00-01.8vhrvk7.mongodb.net:27017,ac-lvkebpp-shard-00-02.8vhrvk7.mongodb.net:27017/restfullapi?ssl=true&replicaSet=atlas-i87euc-shard-0&authSource=admin&retryWrites=true&w=majority`,
  env: "development",
};
