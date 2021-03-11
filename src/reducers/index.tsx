import { loginReducer } from "./LoginReducer";
import {transactionReducer} from "./TransactionReducer"


let allReducers = {
  ChildApp_transaction:transactionReducer,
  ChildApp_login:loginReducer
}
//allReducers["gasabbs"] = transactionReducer;
export default allReducers