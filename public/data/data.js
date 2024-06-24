import { FaHome } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

export const navigationLinks = [
    {id: 1, title: 'Home', image: <FaHome />},
    {id: 2, title: 'Budget', image: <GrMoney />},
    {id: 3, title: 'Transactions', image: <GrTransaction />},
    {id: 4, title: 'Subscriptions', image: <MdOutlineSubscriptions />},
    {id: 5, title: 'Loans', image: <FaHandHoldingHeart />},
    {id: 6, title: 'Reports', image: <TbReportSearch />},
    {id: 7, title: 'Savings', image: <FaHome />},
    {id: 8, title: 'Financial advice', image: <RiCustomerService2Fill />},
    {id: 9, title: 'Account', image: <MdOutlineAccountBalance />},
    {id: 10, title: 'Settings', image: <CiSettings />}
];

export const reportData = [
    {id: 14, month: "Jan", value1: 45, value2: 60},
    {id: 15, month: "Feb", value1: 45, value2: null},
    {id: 16, month: "Mar", value1: 45, value2: null},
    {id: 17, month: "April", value1: 45, value2: null},
    {id: 18, month: "April", value1: 45, value2: null}
];

export const budget = [
    {id: 19, title: "subscription", type: "automated", amount: 22000},
    {id: 20, title: "loan payment", type: "automated", amount: 16000},
    {id: 21, title: "food stuff", type: "automated", amount: 20000},
    {id: 22, title: "subscription", type: "null", amount: 10000},
    {id: 23, title: "subscription", type: "null", amount: 40000}
];

export const subscriptions = [
    {id: 24, title: "LinkedIn", due_date: "23/12/10", amount: 2000},
    {id: 25, title: "Netflix", due_date: "23/12/22", amount: 5000},
    {id: 26, title: "", due_date: "23/12/22", amount: 2000}
];

export const savings = [
    {id: 27, saving_amount: 25000, title: "Pays kids", date: "23/12/22", amount_left: 40000}
];
