import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id:1,
    message:'무엇이든 물어보세요',
  },
  {
    id:2,
    message:'대답이 없으시네요',
  },
  {
    id:3,
    message:'그럼 전 이만 ....',
  },
];

var timer;

class NotificationList extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      notifications:[],
        };
  }
  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(()=>{
      if(notifications.length < reservedNotifications.length){
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications:notifications,
        });
      }else{
        clearInterval(timer);
      }
    }, 3000)
  }
  render(){
    return(
      <div>
        {this.state.notifications.map((notification)=>{
          return<Notification 
          key={notification.id}
          id={notification.id}
          message={notification.message}/>
        })}
      </div>
    );
  }
}
export default NotificationList