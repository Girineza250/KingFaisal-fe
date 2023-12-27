import React from 'react';
import './Widget.scss'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { type } from '@testing-library/user-event/dist/type';
import { MdBedroomParent } from "react-icons/md";
import { MdRoomPreferences } from "react-icons/md";
import { MdNoMeetingRoom } from "react-icons/md";
import { Link } from 'react-router-dom';

function Widget({type}) {
    let data;
    const number = 100
    const diff = 50

    switch (type) {
      case 'List-users':
        data = {
          title: "List-users",
          isMoney: false,
          link: "/users/List-users",
          icon: <IoIosPerson className='icon' style={{background: "rgba(0,128,0,0.2)", color:"green"}} />
        };
        break;
      
      case 'ARoom':
        data = {
          title: "Available Room",
          isMoney: false,
          link: "/Rooms/List-Availble-Rooms",
          icon: <MdRoomPreferences className='icon'  style={{background: "rgba(0,128,0,0.2)", color:"purple"}} />
        };
        break;
      case 'BRoom':
        data = {
          title: "List-Booked-Room",
          isMoney: false,
          link: "/Rooms/List-Booked-Rooms",
          icon: <MdNoMeetingRoom className='icon'  style={{background: "rgba(128,0,128,0.2)", color:"purple "}}/>
        };
        break;
      default:
       
        data = {
          title: "Unknown Type",
          isMoney: false,
          link: "Unknown Link",
          icon: <div className='icon'>?</div>
        };
        break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {data.isMoney }{number}
                </span>
                <span className="link">
                    <Link to={data.link} className='link-title'>List All</Link>
                </span>
            </div>
            <div className="right">
                <div className="percentage">
                    <IoIosArrowUp/>
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;